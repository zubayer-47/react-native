import * as React from 'react';
import { StyleSheet, Button } from 'react-native'
import { IconButton, Colors, Card, Title, Paragraph } from 'react-native-paper';
import colors from '../colors';

function CardComp(props) {

    return (
    <Card style={styles.card} mode='outlined'>
        <Card.Cover source={{ uri: props.uri }} />
        <Card.Content style={styles.container}>
            <Title>{props.title}</Title>
            <Paragraph>
                <Title>
                    {props.price}
                </Title>
                <IconButton
                    icon="plus"
                    style={{backgroundColor: colors.primary, borderRadius: 50, alignSelf: 'flex-end'}}
                    size={23}
                    onPress={() => console.log('Pressed')}
                />
            </Paragraph>
        </Card.Content>
        <Card.Actions>
        </Card.Actions>
    </Card>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 30,
        height: 50,
        borderRadius: 50,
        // marginLeft: '90%'
    },
    card: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    para: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignContent: 'center',
    }
})

export default CardComp;