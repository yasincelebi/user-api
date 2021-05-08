/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
/* import SingleUser from '../SingleUser/SingleUser'; */
import { UserContext } from '../../context/UserContext';
import { mapArr } from '../../helpers/helper';
import SingleUser from '../SingleUser/SingleUser';
import { Col, Container, Row } from 'reactstrap';
import './Users.scss';

import { withRouter } from 'react-router-dom';
const Users = ({ history }) => {
  const { user, job } = useContext(UserContext);
  const mappedUsers = mapArr(user);
  const mappedJobs = mapArr(job);
  return (
    <>
      <Container>
        <div className="users_list">
          <Row>
            {mappedUsers.map((e, i) => {
              const {
                picture,
                location,
                name,
                nat,
                login,
                gender,
                email,
                dob,
                phone,
              } = e;

              const handleClick = () => {
                history.push(`${name.first + name.last}`, {
                  picture,
                  location,
                  gender,
                  name,
                  nat,
                  login,
                  email,
                  dob,
                  phone,
                });
              };
              return (
                <Col key={i} lg="4">
                  <SingleUser
                    picture={picture.large}
                    location={location.state}
                    name={name}
                    key={i}
                    job={mappedJobs.map((e) => e.title)}
                    nat={nat}
                    clickEvent={handleClick}
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

export default withRouter(Users);
