function CardTagList(props: { tags: string[] }) {
  return (
    <div className="card-tags">
      <ul className="card-tags-list">
        {props.tags.map((item, key) => {
          return (
            <li className="card-tags-list__item" key={key}>
              #{item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardTagList;
