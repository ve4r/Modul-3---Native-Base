
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState } from 'react';
import { Button,NativeBaseProvider,Box } from "native-base";
// Dummmy Data (Array of Object)
const datas = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 2,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 3,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 7,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 8,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
];
const List = () => {
  const [modalVisible, setModalVisible] = useState({
    isVisible: false,
    itemTerpilih: null,
  });
  const renderItem = ({ item }) => {
    return (
      <Button padding={15} backgroundColor={'white'} borderBottomColor={"#dddddd"} borderBottomWidth={1}  onPress={() => {
        setModalVisible(
          {
            isVisible: true,
            itemTerpilih: item,
          }

        );
      }}
      >
        <Box >
          <Image alt="list" source={{ uri: item.image }} height={200} width={null} />
          <Text fontSize={30} paddingTop={20}>{item.title}</Text>
        </Box>
      </Button>
    );
  };
  // MODAL
  return (
    <Box>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible.isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible({

            isVisible: false,
            itemTerpilih: null,
          });
        }}>
        <Box flex={1} justifyItems={'center'} alignItems={'center'} marginTop={32}>
          <Box margin={30} backgroundColor={'white'} borderRadius={10} padding={35} alignItems={'center'} shadowColor={'#000'} >
            {modalVisible.itemTerpilih && (
              <Box>
                <Image alt="article" source={{ uri: modalVisible.itemTerpilih.image }} height={200} width={null}/>
                <Text fontSize={18} paddingTop={3}>{modalVisible.itemTerpilih.title}</Text>
              </Box>
            )}
            <Button
              borderRadius={5} padding={3} backgroundColor={'green.500'} 
              onPress={() => {
                setModalVisible({
                  isVisible: false,
                  itemTerpilih: null,
                });
              }}>
             Close
            </Button>
          </Box>
        </Box>
      </Modal>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};


export default List;



