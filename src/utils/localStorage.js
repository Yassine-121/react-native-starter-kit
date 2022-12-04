import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        if (typeof(value) === 'object')
        {
            console.info('is Object')
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        }
        else{
            console.info('is string')
            await AsyncStorage.setItem(key, value)
        }
    } catch (e) {
        console.warn('error :'+ e)
    }
}

export const getData = async (key) => {
    try {
        if (key === 'user_token')
        {
            return await AsyncStorage.getItem(key)
        }
        else if (key === 'user_info')
        {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        }
    } catch (e)
    {
        console.warn('error: '+ e)
    }
}

export const removeData = async (key) => {
    try {
        console.info('remove: '+ key)
        await AsyncStorage.removeItem(key)
        return null;
    } catch (e)
    {
        console.warn('error: '+ e)
    }
}