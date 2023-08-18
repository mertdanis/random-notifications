import { useData } from "../Context/MainContext";

function Content() {
  const { data, dispatch, filter, unreadedNotifications } = useData();

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
            />
          );
        })}

      {/* {filter === "important" &&
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
            />
          );
        })} */}
    </div>
  );
}

function ContentDiv({ name, notification, status, img, dispatch, index }) {
  return (
    <div
      onClick={() => {
        dispatch({
          type: "data/toggleNotification",
          payload: index,
        });
      }}
      className={`flex  items-center gap-6 cursor-pointer border-2 border-black px-6 py-1 ${
        status === false ? "bg-red-300" : "bg-blue-500"
      }`}
    >
      <img className="h-12 my-3" src={`${img}`} alt={`avatar of ${name}`} />
      <div className="flex gap-6">
        <p>{name}</p>
        <p>{notification}</p>
      </div>
    </div>
  );
}

export default Content;
