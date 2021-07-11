import React,{ useState } from 'react'
import { Button, View, Text, Platform } from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from '@react-native-community/datetimepicker';


/*****  Booking Details Page *****/

const pickerStyle = {
	inputIOS: {
		color: 'black',
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
	},
	inputAndroid: {
		color: 'black',
	},
	placeholderColor: 'black',
	underline: { borderTopWidth: 0 },
	icon: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderTopWidth: 5,
		borderTopColor: '#00000099',
		borderRightWidth: 5,
		borderRightColor: 'transparent',
		borderLeftWidth: 5,
		borderLeftColor: 'transparent',
		width: 0,
		height: 0,
		top: 20,
		right: 15,
	},
};
 


function BookingDetails({route, navigation}) {

    const name = route.params.movie
    console.log('in booking detail',name)

    const [showTime,setShowTime] = useState("6.00 PM")
    const [showTickets,setShowTickets] = useState("1")
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
    const showDatepicker = () => {
      showMode('date');
    };

    console.log(showTime)
    console.log(showTickets)

    const input = {
      name,
      showTime,
      showTickets,
      date
    }

    console.log(input)
    const ticketDataString = JSON.stringify(input)


  return (
    
    <View>
      <Text style={{fontWeight: 'bold',fontSize: 20}}> 
      Select Date, Time and Number of seats to book your tickets </Text>
      <Text> {"\n"}</Text>


      <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', 
                overflow: 'hidden'}}>
      <View>
      <Text style={{fontSize: 18, color: 'black',textAlign:'left'}}>Show Date</Text>

      </View>
      
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          format="YYYY-MM-DD"
          maxDate="2021-12-31" 
          minDate={new Date(Date.now())}
        />
    
    </View>

             <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', 
                overflow: 'hidden'}}>
                  <Text style={{fontSize: 18, color: 'black',textAlign:'left'}}>Show Time</Text>
            <RNPickerSelect
                onValueChange={(time) => setShowTime(time)}
                placeholder={{label:"Select Show Time"}}
                style={pickerStyle}
                items={[
                    { label: "3:00 PM", value: "3 PM" },
                    { label: "6:00 PM", value: "6 PM" },
                    { label: "9:00 PM", value: "9 PM" },
                ]}
            />
            </View>

            <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', 
                overflow: 'hidden'}}>
            <Text style={{fontSize: 18, color: 'black',textAlign:'left'}}>Number of Seats</Text>

            <RNPickerSelect
                onValueChange={(num) => setShowTickets(num)}
                placeholder={{label:"Select Number Of Seats"}}
                style={pickerStyle}
                items={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "5", value: "5" },
                ]}
            />
</View>


      <Button title="Confirm Booking"
          onPress={() => navigation.navigate('Confirmation',{ticketDataString:ticketDataString, name: name})}/>
    </View>
  )
}

export default BookingDetails

