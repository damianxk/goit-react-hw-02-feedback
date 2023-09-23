import PropTypes from 'prop-types';
import css from './section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.container}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
