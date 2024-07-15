import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

interface movies {
  Title: String;
  Year: String;
  Type: String;
  Poster: String;
  imdbID: String;
}

function Movies() {
  const [list, setList] = useState<movies[] | undefined>([]);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [id, setId] = useState<String>("");
  const [render, setRender] = useState(false);
  const apikey = "ba9fb544";

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setRender(true);
    console.log("hello");
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=Batman&page=2&apikey=${apikey}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.Search);
      });
  }, []);

  console.log(list);

  const handleClick = (id: string) => {
    setId(id);
    setRender(false);
    setForm({ name: "", email: "", mobile: "" });
  };
  if (list === undefined) return <p>Loading...</p>;

  return (
    <div className="container">
      {id !== "" ? (
        <>
          {list.map((element) => {
            if (id === element.imdbID) {
              return (
                <>
                  <button onClick={() => setId("")}>&lt; go Back</button>
                  <div className="head">
                    <h1>Book your Seat</h1>
                  </div>
                  <div className="upper-container wide-container">
                    <div className="form-content">
                      {render ? (
                        <div>
                          <p>You Seat is booked for the movie</p>
                          <p>
                            ticket Id: {Math.floor(Math.random() * 1000000)}
                          </p>
                          <p>name: {form.name}</p>
                          <p>email: {form.email}</p>
                          <p>moblie: {form.mobile}</p>
                          <p>movie Id: {element.imdbID}</p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit}>
                          <div>
                            <br />
                            <label>Name:</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="enter your name"
                              value={form.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <br />
                            <label>Email:</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="enter your email id"
                              value={form.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <br />
                            <label>Mobile:</label>
                            <input
                              type="number"
                              name="mobile"
                              placeholder="enter your moblie"
                              value={form.mobile}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <button type="submit">Submit</button>
                        </form>
                      )}
                    </div>
                    <div
                      className="card card-wide"
                      onClick={() => handleClick(element.imdbID.toString())}
                    >
                      <div className="image-container wide-image">
                        <img
                          className="card-img-top wide-card"
                          src={element.Poster.toString()}
                          alt="..."
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="card-body">
                        <h4 className="m-0">
                          Title of The Movies: {element.Title.toString()}
                        </h4>
                        <p className="m-0">
                          Year of release: {element.Year.toString()}
                        </p>
                        <p className="m-0">
                          Type of media is : {element.Type.toString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
            return <></>;
          })}
        </>
      ) : (
        <>
          <div className="head">
            <h1>Book your Movies Seat</h1>
          </div>

          <div className="upper-container">
            <div className="movie-container">
              {list?.map((element) => {
                return (
                  <div
                    className="card"
                    onClick={() => handleClick(element.imdbID.toString())}
                  >
                    <div className="image-container">
                      <img
                        className="card-img-top"
                        src={element.Poster.toString()}
                        alt="..."
                      />
                      <div className="overlay"></div>
                    </div>
                    <div className="card-body">
                      <h4 className="m-0">{element.Title.toString()}</h4>
                      <p className="m-0">{element.Year.toString()}</p>
                      <p className="m-0">{element.Type.toString()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
