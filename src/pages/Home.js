import styles from "../styles/pages/Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { HiLightningBolt } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { TbChartBubble } from "react-icons/tb";
import { HiOutlinePlayPause } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDisc } from "react-icons/bs";
import { AiOutlineFolder } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { TiArrowShuffle } from "react-icons/ti";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { auth } from "../config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const Home = () => {
  const [thing, setThing] = useState(0);
  const [data, setData] = useState([]);
  const [acc, setAcc] = useState("");
  const [artist, setArtist] = useState([]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setAcc(" ");
        console.log("logged out");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user;
        console.log(uid);
        setAcc(uid);
      } else {
        // ...
      }
    });

    axios
      .get("http://localhost:8000/artists", {})
      .then((res) => {
        setArtist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error");
      });

    axios
      .get("http://localhost:8000/songs", {})
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  const Right = () => setThing((prev) => prev + 1);
  const Left = () => setThing((prev) => prev - 1);
  if (thing < 0) {
    setThing(thing + 1);
  }
  if (thing === 5) {
    setThing(thing - 1);
  }

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.leftcont}>
          <div className={styles.logo}>
            <HiLightningBolt />
            Mix Music
          </div>
          <div className={styles.leftmiddle}>
            <div className={styles.leftHeader}>Recommend</div>
            <div className={`${styles.leftwordstop} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <AiOutlineHome className={styles.lefticons}></AiOutlineHome>Home
            </div>
            <div className={`${styles.leftwordstop} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <TbChartBubble className={styles.lefticons}></TbChartBubble>
              Explore
            </div>
            <div className={`${styles.leftwordstop} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <HiOutlinePlayPause
                className={styles.lefticons}
              ></HiOutlinePlayPause>
              Genres
            </div>
            <div className={`${styles.leftwordstop} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <BsPeople className={styles.lefticons}></BsPeople>
              Artist
            </div>
          </div>
          <div className={styles.leftmiddle2}>
            <div className={styles.leftHeader}>My Library</div>
            <div className={`${styles.leftwordsmiddle} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <FiMusic className={styles.lefticons}></FiMusic>Recently Played
            </div>
            <div className={`${styles.leftwordsmiddle} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <AiOutlineBarChart
                className={styles.lefticons}
              ></AiOutlineBarChart>
              <Link className={styles.myalbum} to="/Myalbum">
                My Album
              </Link>
            </div>
            <div className={`${styles.leftwordsmiddle} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <AiOutlineHeart className={styles.lefticons}></AiOutlineHeart>
              Favorite Songs
            </div>
            <div className={`${styles.leftwordsmiddle} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <AiOutlineFolder className={styles.lefticons}></AiOutlineFolder>
              Local Files
            </div>
          </div>
          <div className={styles.leftfooter}>
            <div className={styles.leftHeader}>Playlist</div>
            <div className={`${styles.leftwordsbottom} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <BsDisc className={styles.lefticons}></BsDisc>Best of Billie Ei
            </div>
            <div className={`${styles.leftwordsbottom} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <BsDisc className={styles.lefticons}></BsDisc>Best of Eminem
            </div>
            <div className={`${styles.leftwordsbottom} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <BsDisc className={styles.lefticons}></BsDisc>Best of Ariana
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.topright}>
            <div className={styles.toptop}>
              <div className={styles.searchinput}>
                <FiSearch className={styles.search} />
                <input className={styles.topinput} placeholder="Search"></input>
              </div>
              <div className={styles.notifpro}>
                <MdNotificationsNone className={styles.search} />
                <div className={styles.profile}>
                  <h4>
                    <Link to="/Login" className={styles.nocolor}>
                      {acc && "Log out"} {!acc && "Log in"}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className={styles.topheader}>
              <h1 className={styles.dreamtop}>
                Welcome {acc && acc.email}
                {acc && (
                  <button onClick={logout} className={styles.logoutbutt}>
                    log out
                  </button>
                )}
              </h1>
            </div>
            <div className={styles.toptopbottom}>
              <div className={styles.playallmix}>
                <div className={styles.play}>
                  <BsPlayFill className={styles.search}></BsPlayFill>
                  <h4>PLAY ALL</h4>
                </div>
                <div className={styles.mix}>
                  <TiArrowShuffle className={styles.search1}></TiArrowShuffle>
                  <h3>MIX</h3>
                </div>
              </div>
              <div className={styles.topheartsave}>
                <div className={styles.topheart}>
                  <AiFillHeart className={styles.search3}></AiFillHeart>
                </div>
                <div className={styles.topheart}>
                  <FiDownload className={styles.search3}></FiDownload>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className={styles.middleright}>
            <div className={styles.middleupper}>
              <div className={styles.rightHeader}>Weekly Top Tracks</div>
              <div className={styles.leftrightarrow}>
                <div onClick={Left} className={styles.leftarrow}>
                  <HiOutlineArrowSmLeft
                    className={styles.arrows}
                  ></HiOutlineArrowSmLeft>
                </div>
                <div onClick={Right} className={styles.rightarrow}>
                  <HiOutlineArrowSmRight
                    className={styles.arrows}
                  ></HiOutlineArrowSmRight>
                </div>
              </div>
            </div>
            <div
              style={{
                transform: `translateX(${-10 * thing}%)`,
                transition: "300ms",
              }}
              className={styles.middlelower}
            >
              {data.map((_, index) => (
                <div className={styles.card}>
                  <div className={styles.middlepicture}>
                    <img src={data[index].url} className={styles.IMG}></img>
                  </div>
                  <div className={styles.cardsong}>{data[index].name}</div>
                  <div className={styles.cardname}>{data[index].artist}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomleft}>
              <div className={styles.rightHeader}>Billboard Top Charts</div>
              <div className={styles.songs}>
                <div className={styles.songsleft}>
                  <div className={styles.songpicture}>
                    <img
                      src="https://charts-static.billboard.com/img/2004/12/mariah-carey-tgq-180x180.jpg"
                      className={styles.SONGPIC}
                    ></img>
                  </div>
                  <div className={styles.nameartist}>
                    <div>All I Want For Christmas Is You</div>
                    <div className={styles.undercards}>Mariah Carey</div>
                  </div>
                </div>
                <div className={styles.songsright}>
                  <div className={styles.songtime}>3:55</div>
                  <div className={styles.download}>
                    <FiDownload className={styles.lefticons}></FiDownload>
                  </div>
                  <div className={styles.favo}>
                    <AiOutlineHeart
                      className={styles.lefticons}
                    ></AiOutlineHeart>
                  </div>
                  <div className={styles.addtoplay}>
                    <AiOutlinePlus className={styles.lefticons}></AiOutlinePlus>
                  </div>
                </div>
              </div>
              <div className={styles.songs}>
                <div className={styles.songsleft}>
                  <div className={styles.songpicture}>
                    <img
                      src="https://charts-static.billboard.com/img/1978/05/wham-usx-106x106.jpg"
                      className={styles.SONGPIC}
                    ></img>
                  </div>
                  <div className={styles.nameartist}>
                    <div>Last Christmas</div>
                    <div className={styles.undercards}>Wham!</div>
                  </div>
                </div>
                <div className={styles.songsright}>
                  <div className={styles.songtime}>4:22</div>
                  <div className={styles.download}>
                    <FiDownload className={styles.lefticons}></FiDownload>
                  </div>
                  <div className={styles.favo}>
                    <AiOutlineHeart
                      className={styles.lefticons}
                    ></AiOutlineHeart>
                  </div>
                  <div className={styles.addtoplay}>
                    <AiOutlinePlus className={styles.lefticons}></AiOutlinePlus>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottomright}>
              <div className={styles.bottomrighttop}>
                <div className={styles.rightHeader}>Monthly Top Artists</div>
                <div className={styles.seeall}>See all</div>
              </div>
              <div className={styles.bottomrightbottom}>
                {artist.map((_, index) => (
                  <div className={styles.artistcircle}>
                    <img
                      src={artist[index].url}
                      className={styles.artistcircles}
                    ></img>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
