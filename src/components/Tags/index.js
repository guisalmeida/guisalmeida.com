import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Tags = ({ tags = [] }) => {
	return (
		<S.Tags>
			{tags.map((tag, i) => (
				<S.TagHolder key={i} color={tag}>
					<S.TagItem>{tag}</S.TagItem>
				</S.TagHolder>
			))}
		</S.Tags>
	);
};

Tags.propTypes = {
	tags: PropTypes.node.isRequired,
};

export default Tags;
