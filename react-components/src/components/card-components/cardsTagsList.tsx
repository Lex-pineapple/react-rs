function CardTagList(props: { className: string; tags: string[] }) {
  return (
    <div className={props.className}>
      <ul className={`${props.className}-list`}>
        {props.tags.map((item, key) => {
          return (
            <li className={`${props.className}-list__item`} key={key}>
              #{item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardTagList;
