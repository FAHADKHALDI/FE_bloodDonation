import { observer } from 'mobx-react'
import React from 'react'

import { ScrollView } from "native-base";
import requestStore from '../../stores/requestStore'
import SearchRequestItem from './SearchRequestItem'

const SearchRequestList = ({navigation,query }) => {
    const requestList = requestStore.requests
    .filter((request) => request.bloodType.toLowerCase().includes(query.toLowerCase()))
    .map((request) => (
        <SearchRequestItem request={request} key={request._id} navigation={navigation} />
    ))
    return (
        
        <ScrollView> {requestList} </ScrollView>
    )   
    
}

export default observer(SearchRequestList);
