import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCrud } from '../../actions/crudActions';

import { Container, NewsBlock, NewsElem } from './index.style';

const NewsPage = ({ fetch, posts }) => {
  useEffect(() => {
    fetch('posts');
    fetch('users');
  }, []);

  return (
    <Container>
      <NewsBlock>
        {posts && posts.slice(0, 20).map(({
          id, title, userId,
        }) => (
          <NewsElem key={id}>{title} by {userId}</NewsElem>
        ))}
      </NewsBlock>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  posts: state.crud.posts,
  users: state.crud.users,
});

const mapDispatchToProps = {
  fetch: fetchCrud,
};

NewsPage.defaultProps = {
  posts: [{}],
};

NewsPage.propTypes = {
  fetch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number,

  })),
};


export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
