import React, { useEffect, useState } from "react";
import { createClient } from "contentful";


const Media = () => {
  const [defaultMediaScreen, setDefaultMediaScreen] = useState(true);
  const [pictureScreen, setPictureScreen] = useState(false);
  const [videoScreen, setVideoScreen] = useState(false);
  const [image, setImage] = useState([]);
  const [videoMediaLink, setVideoMediaLink] = useState([]);

  const openPictures = () => {
    setPictureScreen(true);
    setDefaultMediaScreen(false);
    setVideoScreen(false);
  };
  const openVideos = () => {
    setVideoScreen(true);
    setPictureScreen(false);
    setDefaultMediaScreen(false);
  };

  // CALLING ALL IMAGES FOR MEDIA
  const client = createClient({
    space: "q2ho18w4i1sf",
    accessToken: "jAilHih3cfcO3JMYSZ5DC9QJWX23MaV_ApsBrw4alNc",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "mediaPictures",
        });
        // console.log(entries);
        setImage(entries.items); // Store all images in state
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, []);

  // CALLING DATA FOR ANOTHER MODEL
  const newClient = createClient({
    space: "q2ho18w4i1sf", // Replace with your new space ID
    accessToken: "yHjuLvmJXw1PAC8JD-wh6cj-4dShvn-dfMiqHsW9zU0", // Replace with your new access token
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await newClient.getEntries({
          content_type: "mediaVideo",
        });
        // console.log(
        //   entries?.items?.[0]?.fields?.videoLink?.content?.[0]?.content?.[0]
        //     ?.value
        // );
        setVideoMediaLink(entries?.items?.[0]?.fields?.videoLink?.content?.[0]?.content?.[0]
          ?.value); // Store all images in state
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, []);

  // CONVERTS YOUTUBE URL TO THE PROPER SHAREABLE LINK


  return (
    <div className="">
      <section className="media_wrap bg-black">
        {defaultMediaScreen && (
          <div className="container">
            <div className="row" style={{ height: "100vh" }}>
              <div className="col text-white d-flex flex-column justify-content-center align-items-center">
                <h2
                  className="text-center majorFOntBrand cursor"
                  onClick={openPictures}
                >
                  Pictures
                </h2>
                <h2
                  className="text-center majorFOntBrand cursor"
                  onClick={openVideos}
                >
                  Video
                </h2>
              </div>
            </div>
          </div>
        )}
        {pictureScreen && (
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div>
                  <i
                    onClick={() => {
                      setPictureScreen(false);
                      setDefaultMediaScreen(true);
                      setVideoScreen(false);
                    }}
                    className=" fas fa-arrow-left cursor text-white"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>
              </div>
              <div className="col-md-8"></div>
              <div className="col-md-2"></div>
            </div>
            <div className="row mt-5">
              <div className="col text-white d-flex flex-column justify-content-center align-items-center">
                <div className="row">
                  {image.map((item) => (
                    <div className="" key={item.sys.id}>
                      {item.fields.medias.map((media) => (
                        <img
                          className="cursor mt-3"
                          key={media.sys.id} // Ensure each media has a unique key
                          src={media.fields.file.url} // Adjust based on your Contentful structure
                          alt={item.fields.title}
                          style={{ width: "100%", height: "auto" }} // Make images responsive
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {videoScreen && (
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div>
                  <i
                    onClick={() => {
                      setPictureScreen(false);
                      setDefaultMediaScreen(true);
                      setVideoScreen(false);
                    }}
                    className="fas fa-arrow-left cursor text-white"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>
              </div>
              <div className="col-md-8"></div>
              <div className="col-md-2"></div>
            </div>
            <div className="row mt-5">
              <div className="col text-white d-flex flex-column justify-content-center align-items-center">
                <div className="row">
                  <div className="video-container">
                    <div dangerouslySetInnerHTML={{ __html: videoMediaLink }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Media;
