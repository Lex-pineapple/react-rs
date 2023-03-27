import React from 'react';

class CardTagList extends React.Component<{ tags: string[] }> {
  constructor(props: { tags: string[] }) {
    super(props);
  }

  render() {
    return (
      <div className="card-tags">
        <ul className="card-tags-list">
          {this.props.tags.map((item, key) => {
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
}

export default CardTagList;
