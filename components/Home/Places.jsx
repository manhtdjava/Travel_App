import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import HeightSpacer from '../Reusable/HeightSpacer'
import { SIZES } from '../../constants/theme'
import Country from '../Titles/Country/Country'

const Places = () => {
    const countries = [
        {
            _id: "1",
            country: "USA",
            description: "The USA is a tourit, know for its diverer landscapes",
            imageUrl: "https://th.bing.com/th/id/R.e1885513e5dfcbd47e9ba8ef3ca29d30?rik=MBuuFPFG4uNRKw&pid=ImgRaw&r=0",
            region: "North America, USA"
        },
        {
            _id: "2",
            country: "Viet Nam",
            description: "Viet Nam la mot dat nuoc dep, dep tu con nguoi den canh quan thien nhien, voi su phong phu ve tai nguyen, thien nhien va su hieu khach cua con nguoi noi day",
            imageUrl: "https://wallpaperaccess.com/full/201088.jpg",
            region: "Ha Noi, VietNam"
        },
        {
            _id: "3",
            country: "Pakistan",
            description: "Pakistan is a country location in South Asia, It shares borders with India",
            imageUrl: "https://i.pinimg.com/originals/88/8e/a8/888ea837104168d7e53443106e0b2a90.jpg",
            region: "South Asia, Paskistan"
        },
        {
            _id: "4",
            country: "England",
            description: "England , a country within the united Kingdom, is steepend in history an culture",
            imageUrl: "https://th.bing.com/th/id/OIP.0fmRRTKrS-XGF0mCbiJQ5AHaFH?rs=1&pid=ImgDetMain",
            region: "Europe, England"
        },
        {
            _id: "5",
            country: "China",
            description: "China , the word's most populous country, is kocated in Eat Asia, With a history",
            imageUrl: "https://th.bing.com/th/id/R.7f1d645d12ab748f5f40630272ae40c5?rik=aSwT2yfNwe0P6g&pid=ImgRaw&r=0",
            region: "Eat Asia, China"
        }

    ]
    return (
        <View>
            <HeightSpacer height={20} />
            <VirtualizedList
                data={countries}
                horizontal
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: SIZES.medium }}>
                        <Country item={item} />

                    </View>
                )}
            />
        </View>
    )
}

export default Places

const styles = StyleSheet.create({})