
import { observer } from "mobx-react";
import { Button, View } from "native-base";
import React from "react";


 const UrgentList = ({filteredUrgent}) => {
  return (
      <View>
      <Button  onPress={filteredUrgent}>Urgent</Button>
      
    </View>
  );
}

export default observer(UrgentList);