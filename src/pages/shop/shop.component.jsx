import React, { Component } from 'react';
import '../../components/collection-preview/collection-preview.component'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends Component {   

   componentDidMount() {
      this.props.fetchCollectionsStart();
    }

   render() {
       const { match } = this.props;

       return (
        <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div> 
       )
   }
}

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);