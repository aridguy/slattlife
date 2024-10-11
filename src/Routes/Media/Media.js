import React from "react";

const Media = () => {
    // default media screens
  // const [defaultMediaScreen, setDefaultMediaScreen] = useState(true);
  // const [pictureScreen, setPictureScreen] = useState(false);
  // const [videoScreen, setVideoScreen] = useState(false);

//   functions buttons togglers
const CloseAll = () => {
    alert('hello')
}

  return (
    <div>
      <section className="media_wrap bg-black">
        <div className="container">
          <div className="row" style={{ height: "100vh" }}>
            <div className="col text-white d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-center majorFOntBrand cursor" onClick={CloseAll}>Pictures</h2>
              <h2 className="text-center majorFOntBrand cursor mt-3">Videos</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
