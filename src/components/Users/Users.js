import React, { useContext } from 'react';
/* import SingleUser from '../SingleUser/SingleUser'; */
import { UserContext } from '../../context/UserContext';
import { mapArr } from '../../helpers/helper';
import SingleUser from '../SingleUser/SingleUser';
import { Col, Container, Row } from 'reactstrap';
import './Users.scss';
const Users = () => {
  const { user, job /* , loading, error */ } = useContext(UserContext);
  const mappedUsers = mapArr(user);
  const mappedJobs = mapArr(job);
  return (
    <>
      <Container>
        <div className="users_list">
          <Row>
            {mappedUsers.map((e, i) => {
              const { picture, location, name, nat } = e;
              return (
                <Col key={i} lg="4">
                  <SingleUser
                    picture={picture.large}
                    location={location.state}
                    name={name}
                    key={i}
                    job={mappedJobs.map((e) => e.title)}
                    nat={nat}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Users;
