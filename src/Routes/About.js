import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { createClient } from "contentful";
// import { Navigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate("/");

  const [toggleAboutUs, setToggleAboutUs] = useState(false);
  const [artists, setArtists] = useState([]);
  const [toggleArtistList, setToggleArtistList] = useState(false);
  const [showArtistsSelected, setShowArtistsSelected] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const [people, setPeople] = useState([]);
  const [togglePeopleList, setTogglePeopletList] = useState(false);
  const [showPeopleSelected, setShowPeopleSelected] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState(null);

  const showArtistsLists = () => {
    setToggleArtistList(true);
  };

  const showAbouts = () => {
    setToggleAboutUs(true);
  };


  const showArtistDetails = (artist) => {
    setSelectedArtist(artist);
    setShowArtistsSelected(true);
    setToggleArtistList(false);
  };

  const showPeopleDetails = (people) => {
    setSelectedPeople(people);
    setShowPeopleSelected(true);
    setTogglePeopletList(false);
  };

  const closeArtistView = () => {
    setShowArtistsSelected(false);
    setShowPeopleSelected(false);
    setTogglePeopletList(false);
    setToggleArtistList(false);
  };

  const showPeopleList = () => {
    setTogglePeopletList(true);
  };

  // Making the Contentful API call for all the artists
  const client = createClient({
    space: "q2ho18w4i1sf",
    accessToken: "V-TtxmRT7G5JdI9sX_eovRwI_fWYSUZyZ5Zwj3lsfj0",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        setArtists(entries.items);
        //  console.log(entries.items);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    getAllEntries();
  }, [client]);

  // Making the Contentful API call for all the people
  const clientsPeople = createClient({
    space: "q2ho18w4i1sf",
    accessToken: "Eg90MiveeV9R2CdhokmCm5UgCzaiIehh9-otq-ydRcw",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await clientsPeople.getEntries();
        setPeople(entries.items);
        // console.log(people);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    getAllEntries();
  }, [clientsPeople]);

  const artistBackgroundImageUrl =
    selectedArtist?.fields?.artistImage?.fields?.file?.url;

  const PeopleBgUrl = selectedPeople?.fields?.peopleImage?.fields?.file?.url;



  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "black",
        }}
      >
        <section className="text-white " id="about-screen-one">
          <div className="container"></div>
          <h1 onClick={showAbouts} className="cursor">
            About
          </h1>
          <h1 onClick={showArtistsLists} className="cursor">
            Artist
          </h1>
          <h1 onClick={showPeopleList} className="cursor">
            People
          </h1>
          <div>
            <i className="cursor" onClick={() => {
              navigate("/menu")
            }}>back</i>
          </div>
        </section>

        {toggleAboutUs && (
          <div className="pop-details-about-slatt p-3">
            <b className="text-white text-uppercase">Introduction</b> <br />
            <small>
              INTRODUCTION This Creative Community Website by _OnlyOne.Eric
              (itz_microsoft) is for creative, talented and determined young
              people. It’s purpose is to empower Nigerians and youths all over
              the universe to connect to the art scene, entertainment, and
              networking around the universe with Nigerian-inspired music,
              American- inspired hip-hop/Rap Music, European-inspired Music,
              Fashion, Street+Style, Instinct, and Culture. The goal is to
              showcase the Nigerian talents, Art Scene, Street+Style Fashion,
              and Culture (Black Lives) and Empower Scale Businesses through the
              Community's Website, while still protecting their safety and
              privacy. We are also committed to protecting human rights and
              following the principles set up in the United Nations Guiding
              Principles on Human Rights and Small Scale Businesses We want
              slattlife.com to be an authentic and safe place for inspiration
              and expression. We want everyone to have a positive experience,
              and a positive vibe on slattlife.com, so we’ve embedded an
              extensive range of safety tools built to keep our community
              website and user safe from the moment a user is checking in. Our
              safety measures includes advanced AI Algorithms, Human Face
              Verification through a real-time photo (Selfie Verification); data
              automatically erased after 24 hours of signing up which has
              verified 100% of our users to be well disciplined; first-of-its
              kind selfie verification, a team of Safety Specialists who work
              24/7 to proactively monitor activity on our platform and respond
              to reports in real-time, customizable tools that allow users to
              protect themselves, reporting features, and educational content.
              SLATTLIFE.COM DESCRIPTION The application for your User Check-in
              access to the standard features of Slattlife.com is free. We
              provided a creative community website to allow you to make new
              friends/network from anywhere in the universe. Our standard
              features are the following: FORUM: a feature to announce and
              receive information about an ongoing content/event; we provide a
              suggestions box for users to express themself, and interact with
              one another announcement/suggestions randomly. LIVE CHAT AND
              CHILL: a feature to meet and discuss with new people around the
              universe (slattlife.com is not a dating website), Share instincts
              and ideas, Nigerian/American/European inspired music suggestions,
              Inspired Teens/Adult Movie suggestions, Educational talks,
              Networking and play games provided by the Admin;
              first-of-its-kind. There's another way to obtain/access additional
              specialty features or content on Slattlife.com: Having access to
              connect directly to People you may know from the VIP Community
              Members, People, and Artists on Slattlife.com (see more about
              their daily life+styles from time to time here), you can purchase
              the VIP'S Board-In Checking Card via SHOP section. SHOP: Empower
              Brother/Sisterhood small-scale businesses across the universe;
              This is one of the best ways we can support and encourage one
              another (Please purchase something) Our Lifes are in our hands.
            </small>{" "}
            <br />
            <div className="mt-3">
              <b className="text-white text-uppercase">
                SLATTLIFE.COM DESCRIPTION
              </b>{" "}
              <br />
              <small>
                The application for your User Check-in access to the standard
                features of Slattlife.com is free. We provided a creative
                community website to allow you to make new friends/network from
                anywhere in the universe. Our standard features are the
                following:
              </small>
              <div className="mt-2">
                <div>
                  <b className="text-white text-uppercase">Forum</b>
                </div>
                <small className="text-white">
                  A feature to announce and receive information about an ongoing
                  content/event; we provide a suggestions box for users to
                  express themselves, and interact with one another
                  announcement/suggestions randomly.
                </small>
              </div>
              <div className="mt-2">
                <div>
                  <b className="text-white text-uppercase">
                    LIVE CHAT AND CHILL:
                  </b>
                </div>
                <small className="text-white">
                  a feature to meet and discuss with new people around the
                  universe (slattlife.com is not a dating website), Share
                  instincts and ideas, Nigerian/American/European inspired music
                  suggestions, Inspired Teens/Adult Movie suggestions,
                  Educational talks, Networking and play games provided by the
                  Admin; first-of-its-kind. There's another way to obtain/access
                  additional specialty features or content on Slattlife.com:
                  Having access to connect directly to People you may know from
                  the VIP Community Members, People, and Artists on
                  Slattlife.com (see more about their daily life+styles from
                  time to time here), you can purchase the VIP'S Board-In
                  Checking Card via SHOP section.
                </small>
              </div>
              <div className="mt-2">
                <div>
                  <b className="text-white text-uppercase">SHOP:</b>
                </div>
                <small className="text-white">
                  Empower Brother/Sisterhood small-scale businesses across the
                  universe; This is one of the best ways we can support and
                  encourage one another (Please purchase something) Our Lifes
                  are in our hands.
                </small>{" "}
                <br />
                <button
                  onClick={() => setToggleAboutUs(false)}
                  className="btn btn-primary"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}

        {toggleArtistList && (
          <div className="pop-details-about-slatt p-3">
            <div className="text-center">
              {artists.map((artist) => (
                <div key={artist.sys.id}>
                  <h3
                    onClick={() => showArtistDetails(artist)}
                    className="text-white cursor"
                  >
                    {artist.fields.artistStageName}
                  </h3>
                </div>
              ))}

              <button onClick={closeArtistView} className="btn btn-primary">
                CLOSE
              </button>
            </div>
          </div>
        )}

        {showArtistsSelected && selectedArtist && (
          <div className="pop-details-about-artist">
            <div
              style={{ backgroundImage: `url(${artistBackgroundImageUrl})` }}
              className="mainPicsAbout-People"
            >
              <div style={{ position: "absolute", bottom: 0, left: 0 }}>
                <h4 className="titles text-white mx-3">
                  {selectedArtist.fields.artistStageName}
                </h4>{" "}
                <small
                  className="text-white mx-3 py-5"
                  style={{ position: "relative", bottom: "9px" }}
                >
                  {selectedArtist.fields.artistSkills}
                </small>

              </div>
            </div>
            <div className="d-details px-3 mt-2 gap-1 d-flex">
              {selectedArtist.fields.artistMediaLinks.socialMediaLinks.map(
                (link, index) => (
                  <a key={index} href={link.url}>
                    <i
                      className={`fab ${link.iconClass} text-white cursor iconsMedia`}
                    ></i>
                  </a>
                )
              )}
            </div>
            <div className="container text-white d-flex gap-3">
              <a rel="noreferrer" target="_blank" href={selectedArtist.fields.artistMediaLinks.socialMediaLinks[1].url}> <i class="fab fa-instagram"></i></a>
              <a rel="noreferrer" target="_blank" href={selectedArtist.fields.artistMediaLinks.socialMediaLinks[0].url}> <i class="fab fa-youtube"></i></a>
              <a rel="noreferrer" target="_blank" href={selectedArtist.fields.artistMediaLinks.socialMediaLinks[2].url}> <i class="fab fa-spotify"></i></a>
              <a rel="noreferrer" target="_blank" href={selectedArtist.fields.artistMediaLinks.socialMediaLinks[3].url}>  <i class="fas fa-music"></i></a>
            </div>
            <h4 className="text-white px-2">Overview</h4>
            <div className="theBio p-4">
              <small className="text-white bios ">
                {selectedArtist.fields.artistBio}
              </small>
            </div>
            <div
              onClick={closeArtistView}
              className="text-center mt-3 text-white closeModalLogin"
            >
              X
            </div>
          </div>
        )}

        {togglePeopleList && (
          <div className="pop-details-about-slatt p-3">
            <div className="text-center">
              {people.map((person) => (
                <div key={person.sys.id}>
                  <h3
                    onClick={() => showPeopleDetails(person)}
                    className="text-white cursor"
                  >
                    {person.fields.peopleName}
                  </h3>
                </div>
              ))}

              <button onClick={closeArtistView} className="btn btn-primary">
                CLOSE
              </button>
            </div>
          </div>
        )}
        {showPeopleSelected && selectedPeople && (
          <div className="pop-details-about-artist">
            <div
              style={{ backgroundImage: `url(${PeopleBgUrl})` }}
              className="mainPicsAbout-People"
            >
              <div style={{ position: "absolute", bottom: 0, left: 0 }}>
                <h4 className="titles mx-3">
                  {selectedPeople.fields.peopleName}
                </h4>{" "}
                <small
                  className="text-white mx-3 "
                  style={{ position: "relative", bottom: "9px", background:"red" }}
                >
                  {selectedPeople.fields.peopleBio}
                </small>
              </div>
            </div>

            <h3 className="text-white px-2 mt-3">Overview</h3>
            <div className="theBio p-4 mt-3">
              <h4 className="text-white bios ">
                {selectedPeople.fields.peopleNickname}
              </h4>
              <h4 className="text-white bios ">
                {selectedPeople.fields.peopleProfession}
              </h4>
              <h4 className="text-white bios ">
                {selectedPeople.fields.peopleGoal}
              </h4>
            </div>
            <div className="d-details px-3 mt-2 gap-1 d-flex">
              {selectedPeople.fields.peopleInstagram.socialMediaLinks.map(
                (link, index) => (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    href={link.url}
                  >
                    <img
                      width={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
                      alt="instagram-icon"
                    />
                  </a>
                )
              )}
            </div>
            <div
              onClick={closeArtistView}
              className="text-center mt-3 text-white closeModalLogin"
            >
              X
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;