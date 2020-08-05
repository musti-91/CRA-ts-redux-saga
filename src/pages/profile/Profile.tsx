import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { SimpleActionCreator } from 'redux-act';
import { connect } from 'react-redux';
import { fetchProfileStart, IFetchProfileAction } from 'store/profile/profile.actions';
import { IProfile } from 'types/store/profile.types';
import { IStore } from 'types/store/store.types';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import Navigation from 'components/Navigation';
import ProfileLogo from 'components/ProfileLogo';
import { Section, TextWrapper } from './Profile.style';

interface IProps {
  fetchProfileStart: SimpleActionCreator<IFetchProfileAction>;
  profile?: IProfile;
  loading: boolean;
  error: any;
}

/**
 * @
 * @function Profile
 **/

const Profile: React.FC<IProps> = ({ fetchProfileStart, profile, loading, error }) => {
  useEffect(() => {
    /** We already have access token in redux state, use it for fetch profile */
    // @ts-ignore
    fetchProfileStart();
  }, [fetchProfileStart]);

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Profile page" />
      </Helmet>
      <Navigation />
      {loading && <Loading />}
      {!loading && profile && (
        <Section>
          <ProfileLogo
            source={profile.images.length > 0 ? profile.images[0] : undefined}
            alt="user avatar"
          />
          <TextWrapper>
            <h1>
              {profile.display_name
                ? profile.display_name
                : profile.email.substring(0, profile.email.indexOf('@'))}
            </h1>
            <p>{profile.email}</p>
            <span>
              <Link to={profile.uri}>Followers</Link>: {profile.followers.total}
            </span>
          </TextWrapper>
        </Section>
      )}
    </>
  );
};

const mapDispatchToProps = {
  fetchProfileStart,
};
const mapStateToProps = (state: IStore) => ({
  profile: state.profile.data,
  loading: state.profile.loading,
  error: state.profile.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
