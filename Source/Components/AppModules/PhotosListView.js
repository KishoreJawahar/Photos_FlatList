import React, {Component} from 'react';
import {View, FlatList, Image, Text, ActivityIndicator} from "react-native";
import styles from './Styles/PhotosListViewStyles';
import {connect} from 'react-redux';
import {getPhotosListAction} from "../../Redux/Actions";

class PhotosListView extends Component {

    componentDidMount() {
        this.props.getPhotosListAction(0);
    }

    state = {
        page: 0
    };

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

    paginationRecord() {
        let nextPage = this.state.page + 1;
        this.props.getPhotosListAction(nextPage);
    }

    renderView() {
        return (
            <FlatList
                data={this.props.photosResponse}
                renderItem={(item) => this.renderFlatList(item)}
                onEndReached={() => {
                    this.paginationRecord()
                }}
            />
        );
    }

    renderLoading() {
        if (this.props.isLoading) {
            return (
                <ActivityIndicator size={'small'} style={styles.loadingStyle}/>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderView()}
                {this.renderLoading()}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    photosResponse: state.photosState.photosResponse,
    photosFailedResponse: state.photosState.photosFailedResponse,
    isLoading: state.photosState.isLoading
});

const mapDispatchToProps = {
    getPhotosListAction

};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosListView);
