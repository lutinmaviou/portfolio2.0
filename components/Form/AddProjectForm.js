import { useState } from 'react';
import queryString from 'querystring';

const AddProjectForm = () => {
  let state = {
    year: '',
    title: '',
    slug: '',
    cover: '',
    lp: '',
    about: '',
    descriptions: [],
    quote: '',
  };

  const [descInputList, setDescInputList] = useState(['']);
  const [form, setForm] = useState(state);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'year':
        setForm({ ...form, year: value });
        break;
      case 'title':
        setForm({ ...form, title: value });
        break;
      case 'slug':
        setForm({ ...form, slug: value });
        break;
      case 'cover':
        setForm({ ...form, cover: value });
        break;
      case 'lp':
        setForm({ ...form, lp: value });
        break;
      case 'about':
        setForm({ ...form, about: value });
        break;
      case 'quote':
        setForm({ ...form, quote: value });
        break;
    }
  };

  const handleDescInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...descInputList];
    list[index] = value;
    setDescInputList(list);
  };

  // handle click event of the Add button
  const handleAddDesc = () => {
    setDescInputList([...descInputList, '']);
  };

  // handle click event of the Remove button
  const handleRemoveDesc = (index) => {
    const list = [...descInputList];
    list.splice(index, 1);
    setDescInputList(list);
  };

  const handleSubmit = async (e) => {
    const list = descInputList;
    const target = form.descriptions;
    target.splice(target.length, 0, ...list);
    const encodedUrl = queryString.stringify(form);
    const data = await fetch(`http://localhost:3000/api/create-project?${encodedUrl}`);
    alert('Projet inséré en bdd!');
  };

  const check = (e) => {
    e.preventDefault();
    const list = descInputList;
    const target = form.descriptions;
    target.splice(target.length, 0, ...list);
    form;
  };

  return (
    <>
      <h1 id="form-title" className="ms-600">
        Ajouter un projet
      </h1>
      <div id="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>
            <input
              className="input spaced ms-400"
              name="year"
              placeholder="Année"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>
          <label>
            <input
              className="input spaced ms-400"
              name="title"
              placeholder="Titre"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>
          <label>
            <input
              className="input spaced ms-400"
              name="slug"
              placeholder="Slug"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>
          <label>
            <input
              className="input spaced ms-400"
              name="cover"
              placeholder="Cover-path"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>
          <label>
            <input
              className="input spaced ms-400"
              name="lp"
              placeholder="Lp-path"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>
          <label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="5"
              className="input spaced ms-400"
              placeholder="A propos"
              onChange={(e) => handleInputChange(e)}
            ></textarea>
          </label>

          {descInputList.map((value, i) => {
            return (
              <div key={i} className="spaced">
                <label>
                  <input
                    className="input ms-400"
                    name="description"
                    placeholder="Description"
                    value={value}
                    onChange={(e) => handleDescInputChange(e, i)}
                    required
                  />
                </label>

                <div className="flex-row spaced center">
                  {descInputList.length !== 1 && (
                    <i
                      className="fas fa-times-circle fa-3x cross-icon icon"
                      onClick={() => handleRemoveDesc(i)}
                    ></i>
                  )}
                  {descInputList.length - 1 === i && (
                    <i
                      className="fas fa-plus-circle plus-icon icon fa-3x"
                      onClick={handleAddDesc}
                    ></i>
                  )}
                </div>
              </div>
            );
          })}

          <label>
            <input
              className="input spaced ms-400"
              name="quote"
              placeholder="Citation mentor"
              onChange={(e) => handleInputChange(e)}
            />
          </label>

          <div className="flex-row around spaced">
            <button type="submit" onClick={check} className="btn btn-1 ms-600">
              <span>Vérifier données</span>
              <i className="fas fa-chevron-right fa-2x chevrons"></i>
            </button>

            <button type="submit" onClick={handleSubmit} className="btn btn-2 ms-600">
              <span>Valider</span>
              <i className="fas fa-chevron-right fa-2x chevrons"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProjectForm;
