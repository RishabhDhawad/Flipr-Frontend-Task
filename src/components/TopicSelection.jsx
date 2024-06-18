import { useState , useEffect} from "react";
// import React {useState} from "react";

function TopicSelection() {
  const [List, setList] = useState("");
  const url =
    "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-eexgfbu/endpoint/v2/list?list=show";
  const fetchList = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  
  
}

export default TopicSelection;
