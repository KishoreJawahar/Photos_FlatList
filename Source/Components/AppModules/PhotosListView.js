import React, {Component} from 'react';
import {View, FlatList, Image, Text} from "react-native";
import styles from './Styles/PhotosListViewStyles';
import {connect} from 'react-redux';
import {getPhotosListAction} from "../../Redux/Actions";

class PhotosListView extends Component {
    componentDidMount() {
        this.props.getPhotosListAction();
    }

    renderFlatList({item}) {
        return (
            <View style={styles.parentViewStyle}>
                <View style={styles.textContentView}>
                    <Image source={{uri: item.url}} style={styles.imageStyle}/>
                    <View style={styles.textViewStyle}>
                        <Text style={styles.textStyle}> {item.title} </Text>
                    </View>
                </View>
            </View>
        );
    }

    renderView() {
        return (
            <FlatList
                data={this.props.photosResponse}
                renderItem={(item) => this.renderFlatList(item)}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderView()}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    photosResponse: state.photosState.photosResponse,
    photosFailedResponse: state.photosState.photosFailedResponse
});

const mapDispatchToProps = {
    getPhotosListAction

};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosListView);
