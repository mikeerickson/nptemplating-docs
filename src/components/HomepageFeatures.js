import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Build powerful templates',
    Svg: require('../../static/img/logo2.svg').default,
    description: (
      <>
        Tired of having to input the same information manually for each of your notes? Automate everything with `np.Templating` templating plugin.
      </>
    ),
  },
  {
    title: 'Use Internal Variables / Methods',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Whether it be one of the built-in variables or methods, or if you want to create your own custom interfaces, `np.Templating` has an exhaustive API to suit your needs

      </>
    ),
  },
  {
    title: 'Create Custom Plugins',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend templates using custom Plugins that you might create, or those created and distributed by other NotePlan users.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
