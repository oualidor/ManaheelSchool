import { useState, useEffect } from 'react';
import {getTrendingCategories} from '../../services';
import {Box, Container} from "theme-ui";

import YitPostCard from "../../components/YitPostCard";
import CategoryCard from "../../components/CategoryCard";


const TrendingCategories = ({lang}) => {
  const [categories, setCategories] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const styles=  {
    svg :{height: "100%", width: "100%", color: 'white', cursor: "pointer", },

    customLeftArrow: {
      position: "absolute", left: 0, backgroundColor: "primary", borderRadius: "50%",
      p: 2, width: 40, height: 40,
      animation: 'width 2s',
      '&:hover': {
        borderRadius: "40%",
        width: 55,

      }
    },
    customRightArrow: {
      position: "absolute", right: 0, backgroundColor: "primary", borderRadius: "50%",
      p: 2, width: 40, height: 40,
      '&:hover': {
        borderRadius: "40%",
        width: 55
      }
    }
  }
  useEffect(() => {
    getTrendingCategories(lang).then((result) => {
      setCategories(result);
      setDataLoaded(true);
    });
  }, []);



  return (
    <section sx={{variant: "section.white"}}>
      <Container>
        {dataLoaded && categories.map((category, index) =>{
          return(
              <CategoryCard category={category} key={index} lang={lang}></CategoryCard>
          )
        }) }

      </Container>

    </section>
  );
};

export default TrendingCategories;
