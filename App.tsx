import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { create } from "react-test-renderer";

 const App=()=>{
   const [result, setResult] = useState(0); 
  const [firstnumber, setFirstnumber] = useState(''); 
  const [operator, setoperator] = useState(null); 
  const setNumber =(number) => { 
    if (result === 0) { 
      setResult(number); 
    } else { 
      setResult(result + number); 
    } 
  }; 
  const operand = (eht:String) => { 
    setoperator(eht); 
    setFirstnumber(parseInt(result)); 
    setResult(''); 
  }; 
  const getResault=()=>{
  switch (operator) { 
    case '+': 
      setResult(parseInt(firstnumber) + parseInt(result)); 
      break; 
    case '-': 
      setResult(parseInt(firstnumber) - parseInt(result)); 
      break; 
    case '*': 
      setResult(parseInt(firstnumber) * parseInt(result)); 
      break; 
    case '/': 
      setResult(parseInt(firstnumber) / parseInt(result)); 
      break; 
    default: 
      setResult(0); 
      break; }
  }


  return(
   <View style={styles.continer}>
<View style={styles.textcontiner}>
          <Text style={styles.text}>{result}</Text>
          </View>
 <View style={styles.botunplace}>
 <TouchableOpacity  style={styles.buton} 
 onPress={()=>setNumber('7')} >
      <Text>7</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.buton}
       onPress={()=>setNumber('8')}>
      <Text>8</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.buton}
       onPress={()=>setNumber('9')}>
      <Text>9</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.operatorcontiner}
        onPress={()=>{operand('+')}}>
      <Text>+</Text>
       </TouchableOpacity>
  
    
      <TouchableOpacity  style={styles.buton}
      onPress={()=>setNumber('4')}>
      <Text>4</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.buton}
       onPress={()=>setNumber('5')}>
      <Text>5</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.buton}
       onPress={()=>setNumber('6')}>
      <Text>6</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.operatorcontiner}
        onPress={()=>{operand('-')}}>
      <Text>-</Text>
       </TouchableOpacity>
   
    
    
      <TouchableOpacity  style={styles.buton}
      onPress={()=>setNumber('1')}>
      <Text>1</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.buton}
       onPress={()=>setNumber('2')}>
      <Text>2</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.buton}
       onPress={()=>setNumber('3')}>
      <Text>3</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.operatorcontiner}
        onPress={()=>{operand('*')}}>
      <Text>*</Text>
       </TouchableOpacity>
   

      <TouchableOpacity  style={styles.operatorcontiner}
      onPress={()=>setNumber('7')}>
      <Text>c</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.buton}
       onPress={()=>setNumber('0')}>
      <Text>0</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.operatorcontiner}
       onPress={()=>{operand('/')}}>
      <Text>/</Text>
       </TouchableOpacity>
       <TouchableOpacity  style={styles.operatorcontiner}
       onPress={()=>getResault()}>
      <Text>=</Text>
       </TouchableOpacity>
      
   
    </View>
    </View>
  )
 }
 export default App;
 const styles=StyleSheet.create({
  continer:{
    flex:1,
    backgroundColor: '#8698A8', 
    
  },
  textcontiner:{
flex:1,

justifyContent:'space-around'
  },
  text:{
    fontSize: 40, 
    fontWeight: '500', 
    color: 'blue', 
  },
  botunplace:{
    justifyContent:'center',
    flexWrap:'wrap',
    flexDirection:'row',
    gap:10
    
   
  },
buton:{
  width:'22%',
  height:99,
  backgroundColor:'green',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:22
},
operatorcontiner:{
  width:'22%',
  height:99,
  backgroundColor:'blue',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:22

}
 })