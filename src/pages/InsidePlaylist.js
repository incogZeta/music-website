import styles from "../styles/pages/insidePlaylist.module.css";
import { HiLightningBolt } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { TbChartBubble } from "react-icons/tb";
import { HiOutlinePlayPause } from "react-icons/hi2";
import { BsPeople } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDisc } from "react-icons/bs";
import { AiOutlineFolder } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export const InsidePlaylist = () => {
  const [data, setData] = useState({});
  const [songs, setSongs] = useState([]);
  const { user } = useAuth();
  const nameref = useRef();
  const param = useParams();
  const navigate = useNavigate();

  const deletePlaylist = () => {
    axios
      .delete("http://localhost:8000/playlist/" + param.id)
      .then((res) => {
        console.log("Deleted", res.data);
        navigate("/Myalbum");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const additem = (_, index) => {
    if (nameref.current.value) {
      axios
        .post("http://localhost:8000/songs", {
          name: nameref.current.value,
        })
        .then((res) => {
          axios
            .put("http://localhost:8000/playlist/" + param.id, {
              id: res.data._id,
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/playlist/" + param.id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    axios
      .get("http://localhost:8000/songs/")
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

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
              <AiOutlineHome className={styles.lefticons}></AiOutlineHome>
              <Link className={styles.myalbum} to="/">
                Home
              </Link>
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
          <div className={styles.righttop}>
            <h1>{user && user.email}'s Playlists</h1>
            <div className={styles.searchand}>
              <input
                className={styles.input}
                placeholder="Add a New Song"
                ref={nameref}
              ></input>
              <div className={styles.addbtncont}>
                <button className={styles.addbtn} onClick={additem}>
                  Add Song
                </button>
              </div>
            </div>
          </div>
          <div className={styles.titleer}>
            <h1>{data?.title}</h1>
            <h3 className={styles.delete} onClick={deletePlaylist}>
              delete playlist
            </h3>
          </div>
          <div className={styles.middle}>
            {data?.songs?.map((song) => (
              <div className={styles.songs}>{song.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
