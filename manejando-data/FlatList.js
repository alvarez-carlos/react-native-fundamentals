import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'


export default function App(){
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: '1',
            name: 'Carlos'
          },
          { key: '2',
            name: 'Pedro'
          },
          { key: '3',
            name: 'Jhon'
          },
          { key: '4',
            name: 'Mark'
          },
          { key: '5',
            name: 'Julio'
          },
          { key: '6',
            name: 'Oscar'
          },
          { key: '7',
            name: 'Mario'
          },
          { key: '8',
            name: 'Lucas'
          },
          { key: '9',
            name: 'Maria'
          },
          { key: '10',
            name: 'Julia'
          },
          { key: '11',
            name: 'Arcadio'
          },
          { key: '12',
            name: 'Paulo'
          },
          { key: '13',
            name: 'Roger'
          },
          { key: '14',
            name: 'Jason'
          },
          { key: '15',
            name: 'Juan'
          },
           { key: '16',
            name: 'Marco'
          },
          { key: '17',
            name: 'Simon'
          },
          { key: '18',
            name: 'Susana'
          },
          { key: '19',
            name: 'Ana'
          },
          { key: '20',
            name: 'Alejandro'
          },
          { key: '21',
            name: 'Patricia'
          },
          { key: '22',
            name: 'Peter'
          },
          { key: '23',
            name: 'Michael'
          },
          { key: '24',
            name: 'Marcelo'
          },
          { key: '25',
            name: 'Alanis'
          },
          { key: '26',
            name: 'Edith'
          },
          { key: '27',
            name: 'Jose'
          },
          { key: '28',
            name: 'Doris'
          },
          { key: '29',
            name: 'Kristhell'
          },
          { key: '30',
            name: 'Martina'
          },
           { key: '31',
            name: 'Sevatian'
          },
          { key: '32',
            name: 'Carmelo'
          },
          { key: '33',
            name: 'Adonai'
          },
          { key: '34',
            name: 'Franklin'
          },
          { key: '35',
            name: 'Laura'
          },
          { key: '36',
            name: 'Rigoberto'
          },
          { key: '37',
            name: 'Celso'
          },
          { key: '38',
            name: 'Fatima'
          },
          { key: '39',
            name: 'Arcadio'
          },
          { key: '40',
            name: 'Miguel'
          },
          { key: '41',
            name: 'Ismael'
          },
          { key: '42',
            name: 'Moises'
          },
          { key: '43',
            name: 'Fatima'
          },
          { key: '44',
            name: 'Lidia'
          },
        ]} //data to be rendered
        renderItem={({ item }) => <Text style={styles.item}>{item.key} - {item.name}</Text>} //It explains how the data is going to be rendered. It receives an object containing a function. This function receives an object as argument which is the item's informacion that we are goign to render. So, we are going to apply destructuring to get the item from the object. Finally, we use a Component to render the item, in this case a Text Component.
      />
    </View>
  )
}


const styles =  StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'stretch',
    paddingTop: 20,
  },
  item:{
    padding: 10,
    fontSize: 22,
    borderBottomColor: '#ccc',
    borderBottomWidth:1,
  }
})