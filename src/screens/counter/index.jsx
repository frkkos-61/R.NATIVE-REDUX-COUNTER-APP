import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementCount,
  incrementCount,
  resetCount,
} from '../../store/actions/counterActions';

const Counter = () => {
  // const count = useSelector(state => state.counter.count);

  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FDE7BB'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 150,
            height: 150,
            borderRadius: 200,
            backgroundColor: '#FC8F54',
          }}>
          <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
            {count}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          padding: 10,
        }}>
        <CustomButton
          onPress={() => dispatch(incrementCount())}
          title="INCREMENT"
          color="#AA5486"
        />
        <CustomButton
          onPress={() => dispatch(decrementCount())}
          title="DECREMENT"
          color="#66785F"
        />
        <CustomButton
          onPress={() => dispatch(resetCount(0))}
          title="RESET"
          color="#88C273"
        />
      </View>
    </SafeAreaView>
  );
};

export default Counter;

const styles = StyleSheet.create({});
