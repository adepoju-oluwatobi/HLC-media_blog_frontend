import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server_announcement } from '../server';

function Announcement() {
    const [data, setData] = useState(null);

    async function fetchData() {
      try {
        const response = await axios.get(`${server_announcement}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='container'>
      <div className="mt-[-20px]">
        <p className="bg-[#C02E5A] w-fit px-2 py-1 text-white rounded-xl relative top-8">
          Announcements
        </p>
        {data ? (
          data.map((announcement) => (
            <div key={announcement.id}>
              <img src={announcement.image} alt="" />
              <p className="post-title">{announcement.title}</p>
              <p className="content">{announcement.des}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <p className="p-2 bg-black w-fit text-white rounded-xl mt-2">
          Read More...
        </p>
      </div>
    </div>
  );
}

export default Announcement