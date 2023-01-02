import styles from "../styles/pages/Myalbum.module.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
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
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export const Myalbum = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/playlists", {})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  const additem = () => {};

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.leftcont}>
          <div className={styles.logo}>
            <HiLightningBolt />
            <div>Mix Music</div>
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
              <BsDisc className={styles.lefticons} />
              Best of Billie Ei
            </div>
            <div className={`${styles.leftwordsbottom} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <BsDisc className={styles.lefticons} />
              Best of Eminem
            </div>
            <div className={`${styles.leftwordsbottom} ${styles.hover}`}>
              <div className={`${styles.leftglow} ${styles.glow}`}></div>
              <BsDisc className={styles.lefticons} />
              Best of Ariana
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.righttop}>
            <h1>Amarsaikhan's Album</h1>
            <div className={styles.searchand}>
              <FiSearch className={styles.FiSearch} />
              <input className={styles.input} placeholder="search"></input>{" "}
              <div className={styles.addbtncont}>
                <button className={styles.addbtn} onClick={additem}>
                  add
                </button>
              </div>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.middlecont}>
              {data.map((_, index) => (
                <div className={styles.card}>
                  <p>{data[index].title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};