import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AnnImg from '../assets/ann-img.png';

function Announcement() {
    const [data, setData] = useState(null);

    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/announcement"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div>
      <div className="p-4 mt-[-20px]">
        <p className="bg-[#C02E5A] w-fit px-2 py-1 text-white rounded-xl relative top-8">Announcements</p>
        <img src={AnnImg} alt="" />
        {data ? (
          data.map((post) => (
            <div key={post.id}>
              <p className="post-title">{post.title}</p>
              <p className="content">{post.des}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <p className='py-1 px-2 bg-black w-fit text-white rounded-xl mt-2'>Read More...</p>
      </div>
    </div>
  );
}

export default Announcement