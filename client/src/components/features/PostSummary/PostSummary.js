import React from 'react';
import { PropTypes } from 'prop-types';
import './PostSummary.scss';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import CutText from '../../../utils/CutText/CutText';

const PostSummary = ({ id, title, content }) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <HtmlBox>{cutText(content, 250)}</HtmlBox>
        <Button variant="primary">
            Read more
        </Button>
    </article>
);

PostSummary.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
};
export default (content, maxLength) => {
    if (content.length < 1) return 'Error';
    if (content.length <= maxLength) return content;
    return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
