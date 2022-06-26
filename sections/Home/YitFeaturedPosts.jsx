
import  { useState, useEffect } from 'react';
import { getFeaturedPosts } from '../../services';
import {Box, Container} from "theme-ui";
import YitPostCard from "../../components/YitPostCard";
import Post from "../../src/Apis/Post";


const styles1 = {
  Container : {
    backgroundColor: "white",
    mb:2,
    display: "flex"

  },
  imageHolder: {
    width: "65%",
    height: 320,

  },
  postInfoHolder:{
    width: "35%",  p:4
  },
  nameTag: {
    color: "primary",
    fontSize: "28px",
    fontWeight: "bold",
    cursor: "pointer",
    transitionDuration: "700",
    '&:hover':{
      color: "red"
    }
  },
  infoHolder: {
    width: "100%",
    display: "flex",
    authorInfoHolder: {
      display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around",
      nameTag: {
        color: "white",
      }
    },
    dateInfoHolder: {
      width: "40%",
      display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",
      nameTag: {
        color: "white",
      }
    }
  },
  actionsContainer: {
    display: "flex", alignItems: "center", justifyContent: "center"
  }
}
const styles2 = {
  Container : {
    backgroundColor: "white",
    mb:2,
    display: "flex", flexDirection: "column-reverse",
    width: "31%", height: 400

  },
  imageHolder: {
    width: "100%",
    height: "60%",

  },
  postInfoHolder:{
    height: "40%",
    width: "100%",  p:4, overflow: "hidden"

  },
  nameTag: {
    color: "primary",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transitionDuration: "700",
    '&:hover':{
      color: "red"
    }
  },
  infoHolder: {
    width: "100%",
    display: "flex",
    authorInfoHolder: {
      display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around",
      nameTag: {
        color: "white",
      }
    },
    dateInfoHolder: {
      width: "40%",
      display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",
      nameTag: {
        color: "white",
      }
    }
  },
  actionsContainer: {
    display: "flex", alignItems: "center", justifyContent: "center"
  }
}

function YitFeaturedPosts  ({lang})  {
  let [featuredPosts, setFeaturedPosts] = useState([]);
  let [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts(lang).then((result) => {
      setFeaturedPosts(result);
      console.log(result)
      setDataLoaded(true);
    });
  }, []);

  return (
    <Box sx={{variant: "section.noWhite"}}>
      <Container>
        <Box sx={{boxShadow:"10px 10px 10px rgba(255, 255, 255, 0.1)"}}>
          {
            dataLoaded && <YitPostCard post={featuredPosts[0]} styles={styles1}></YitPostCard>
          }
        </Box>
        <Box sx={{display: "flex", alignContent: "space-between", justifyContent: "space-between"}}>
          {dataLoaded && featuredPosts.map((post, index) => {
            if(index !== 0){
              return(

                    <YitPostCard key={index} post={post} styles={ styles2}/>


              )
            }

          })}
        </Box>

      </Container>

    </Box>
  );
};

export default  YitFeaturedPosts
