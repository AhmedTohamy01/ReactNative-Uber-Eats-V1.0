import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import styled from 'styled-components'
import Buttons from '../components/Home/Buttons'
import Categories from '../components/Home/Categories'
import { yelpData } from '../data/yelpData'
import RestaurantCard from '../components/Home/RestaurantCard'

export default function HomeScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('delivery')
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredData, setFilteredData] = useState([])

  const getFilteredData = () => {
    const filteredArr = []
    const arr = yelpData.businesses

    for (let i = 0; i < arr.length; i++) {
      const catArr = arr[i].categories.map((item) => item.alias)
      if (catArr.includes(activeCategory)) {
        filteredArr.push(arr[i])
      }
    }

    if (activeCategory === 'all') {
      return arr
    } else {
      return filteredArr
    }
  }

  useEffect(() => {
    setFilteredData(getFilteredData())
  }, [activeCategory])

  return (
    <PageWrapper>
      <Buttons activeTab={activeTab} setActiveTab={setActiveTab} />
      <Categories setActiveCategory={setActiveCategory} />
      <StyledScrollView showsVerticalScrollIndicator={false}>
        {filteredData?.map((item) => (
          <RestaurantCard
            key={item.id}
            image={item.image_url}
            name={item.name}
            price={item.price}
            reviews={item.review_count}
            rating={item.rating}
            categories={item.categories}
            navigation={navigation}
          />
        ))}
      </StyledScrollView>
    </PageWrapper>
  )
}

/*---> Styles <---*/

const PageWrapper = styled(View)`
  /* border: 1px solid yellow; */
  align-items: center;
  flex: 1;
  background-color: white;
`

const StyledScrollView = styled(ScrollView).attrs({
  contentContainerStyle: {
    // borderStyle: 'solid',
    // borderColor: 'yellow',
    // borderWidth: 1,
    alignItems: 'center',
    paddingBottom: 50,
  },
})`
  width: 100%;
  height: 70%;
`
