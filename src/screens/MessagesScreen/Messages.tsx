import { useState } from "react";
import { FlatList, ImageSourcePropType } from "react-native";

import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemSeparator from "../../components/ListItemSeparator";

export interface Message {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const InitialMessages: Message[] = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(InitialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const deleteHandler = (message: Message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          image={item.image}
          title={item.title}
          subTitle={item.description}
          onPress={() => console.log("message")}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => deleteHandler(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() =>
        setMessages([
          {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../../../assets/mosh.jpg"),
          },
        ])
      }
    />
  );
};

export default MessagesScreen;
