import { useData } from "../Context/MainContext";

function Content() {
  const {
    data,
    dispatch,
    filter,
    unreadedNotifications,

    importantNotifications,
  } = useData();

  return (
    <div>
      {filter === "all" &&
        data.map((value, index) => {
          return (
            <ContentDiv
              name={value.name}
              notification={value.notificationText}
              status={value.status}
              img={value.img}
              key={value.name}
              dispatch={dispatch}
              index={index}
              isImportant={value.isImportant}
            />
          );
        })}

      {filter === "unread" &&
        unreadedNotifications.map((value, index) => {
          return (
            <ContentDiv
              name={value.name}
              notification={value.notificationText}
              status={value.status}
              img={value.img}
              key={value.name}
              dispatch={dispatch}
              index={index}
              isImportant={value.isImportant}
            />
          );
        })}

      {filter === "important" &&
        importantNotifications.map((value, index) => {
          return (
            <ContentDiv
              name={value.name}
              notification={value.notificationText}
              status={value.status}
              img={value.img}
              key={value.name}
              dispatch={dispatch}
              index={index}
              isImportant={value.isImportant}
            />
          );
        })}
    </div>
  );
}

function NoContent() {
  return <div className="flex justify-center items-center">No Content!</div>;
}

function ContentDiv({
  name,
  notification,
  status,
  img,
  dispatch,
  index,
  isImportant,
}) {
  return (
    <div
      className={`flex transition duration-700 items-center  gap-6 cursor-pointer  px-6 py-1 border-b-[1px] border-black ${
        status === false ? "bg-slate-300		" : ""
      }`}
    >
      <img
        className="h-12 rounded-full my-3"
        src={`${img}`}
        alt={`avatar of ${name}`}
      />
      <div className="flex gap-6">
        <p className="font-bold italicc capitalize">{name.substring(0, 20)}</p>
        <p className="font-semibold">{notification.substring(0, 75)}</p>
      </div>
      <div className="flex  text-xl  gap-5 ml-auto">
        <i
          onClick={() => {
            dispatch({
              type: "data/toggleNotification",
              payload: index,
            });
          }}
          className={` ${
            status === true
              ? "fa-solid fa-circle-check text-green-600"
              : "fa-regular fa-circle-check"
          }`}
        ></i>
        <i
          onClick={() => {
            dispatch({
              type: "data/toggleImportant",
              payload: index,
            });
          }}
          className={` ${
            isImportant === true
              ? "fa-solid fa-star text-green-600"
              : "fa-regular fa-star"
          }`}
        ></i>

        <i
          onClick={() => {
            dispatch({
              type: "data/del",
              payload: index,
            });
          }}
          className="fa-regular fa-trash-can"
        ></i>
      </div>
    </div>
  );
}

export default Content;
