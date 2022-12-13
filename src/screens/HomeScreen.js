import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
} from "react-native";
import events from "../../assets/data/events";
import HomeSCreenCarousel from "../components/HomeScreenCarousel";

const HomeScreen = ({ navigation }) => {
  const width = useWindowDimensions().width;
  const [list, setList] = useState(events);
  const [filterActive, setFilterActive] = useState(false);
  const [filterName, setFilterName] = useState("");

  const filters = (genre) => {
    console.log(genre);
    if (!filterActive) {
      setFilterName(genre);
      setList(list.filter((list) => list.genre == genre));
      setFilterActive(true);
    } else {
      setList(events);
      setFilterActive(false);
      setFilterName("");
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{}}>
        <ImageBackground
          source={require("../../assets/wallpaper.jpg")}
          style={{
            width: "100%",
            height: 500,
            resizeMode: "cover",
            justifyContent: "center",
          }}
        >
          {/* Title */}
          <Text
            style={{
              fontSize: 90,
              fontWeight: "bold",
              color: "white",
              width: "70%",
              marginLeft: 25,
              marginTop: 260,
              lineHeight: 96,
            }}
          >
            Enjoy More
          </Text>
        </ImageBackground>

        {/* Inspiration text */}
        <View
          style={{
            marginLeft: 30,
            marginTop: 30,
            marginBottom: 15,
            width: "70%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
            Explore Upcomming Events
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
        >
          <Pressable
            onPress={() => {
              filters("Comedy");
            }}
            style={{
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 0.5,
              marginRight: 10,
            }}
          >
            {filterActive && filterName == "Comedy" ? (
              <Text
                style={{
                  padding: 10,
                  fontSize: 18,
                  backgroundColor: "black",
                  borderRadius: 10,
                  color: "white",
                }}
              >
                Comedy
              </Text>
            ) : (
              <Text style={{ padding: 10, fontSize: 18 }}>Comedy</Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => {
              filters("Play");
            }}
            style={{
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 0.5,
              marginRight: 10,
            }}
          >
            {filterActive && filterName == "Play" ? (
              <Text
                style={{
                  padding: 10,
                  fontSize: 18,
                  backgroundColor: "black",
                  borderRadius: 10,
                  color: "white",
                }}
              >
                Play
              </Text>
            ) : (
              <Text style={{ padding: 10, fontSize: 18 }}>Play</Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              filters("Movie");
            }}
            style={{
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 0.5,
              marginRight: 10,
            }}
          >
            {filterActive && filterName == "Movie" ? (
              <Text
                style={{
                  padding: 10,
                  fontSize: 18,
                  backgroundColor: "black",
                  borderRadius: 10,
                  color: "white",
                }}
              >
                Movie
              </Text>
            ) : (
              <Text style={{ padding: 10, fontSize: 18 }}>Movie</Text>
            )}
          </Pressable>
        </View>

        <View style={{ paddingRight: 20 }}>
          <FlatList
            data={list}
            renderItem={({ item }) => <HomeSCreenCarousel post={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width - 100}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
