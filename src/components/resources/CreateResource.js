import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addResource } from '../../actions/resource';

const CreateResource = ({ auth: { user }, addResource }) => {
  const defaultInfo = { link: '', url: '' };
  const [formData, setFormData] = useState({
    name: '',
    creator: '', // todo user.name
    desc: '',
    links: [{...defaultInfo}]
  });

  const { name, desc, links } = formData;

  const onChange = (e) => {
    if (['link', 'url'].includes(e.target.className)) {
      console.log(e.target.dataset.id);
      console.log(e.target.className);
      const updatedLinks = [...links]
      updatedLinks[e.target.dataset.id][e.target.className] = e.target.value;
      console.log(updatedLinks);
      setFormData({links: updatedLinks });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addResource(formData);
  };

  const addLink = (e) => {
    setFormData({links: [...links, {...defaultInfo}] });
  };

  const deleteLink = (idx) => () => {
    /* Todo */
  };

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="resourceName">Resource Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            aria-describedby="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="resourceDesc">Resource Description</label>
          <textarea
            type="text"
            className="form-control"
            name="desc"
            value={desc}
            onChange={(e) => onChange(e)}
            aria-describedby="name"
          />
        </div>

        {links.map((val, idx) => {
          let linkId = `link${idx}`,
            urlId = `url${idx}`;
          return (
            <div key={idx}>
              <label htmlFor={linkId}>{`Link Name #${idx + 1}`}</label>
              <input
                type="text"
                name={linkId}
                data-id={idx}
                id={linkId}
                value={links[idx].link}
                onChange={(e) => onChange(e)}
                className="link"
              />

              <label htmlFor={urlId}>{`Url #${idx + 1}`}</label>
              <input
                type="text"
                name={urlId}
                data-id={idx}
                id={urlId}
                value={links[idx].url}
                onChange={(e) => onChange(e)}
                className="url"
              />
              <button className="btn btn-danger" onClick={deleteLink(idx)}>
                Delete
              </button>
            </div>
          );
        })}

        <button
          type="button"
          className="btn btn-general"
          onClick={(e) => addLink(e)}
        >
          Add Link
        </button>

        <button type="submit" className="btn btn-general">
          Create Resource
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addResource }
)(CreateResource);
