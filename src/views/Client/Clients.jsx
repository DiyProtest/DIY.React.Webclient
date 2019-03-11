import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Dvr from "@material-ui/icons/Dvr";
import Person from "@material-ui/icons/Person"
import People from "@material-ui/icons/People"
// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardIcon from "../../components/Card/CardIcon.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";

import { dataTable } from "../../variables/general.jsx";

import { cardTitle } from "../../assets/jss/material-dashboard-pro-react.jsx";

const styles = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: "15px",
        marginBottom: "0px"
    }
};

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dataTable.dataRows.map((prop, key) => {
                return {
                    id: key,
                    name: prop[0],
                    position: prop[1],
                    office: prop[2],
                    age: prop[3],
                    actions: (
                        // we've added some custom button actions
                        <div className="actions-right">
                            {/* use this button to remove the data row */}
                            <Button
                                justIcon
                                round
                                simple
                                onClick={() => {
                                    var data = this.state.data;
                                    data.find((o, i) => {
                                        if (o.id === key) {
                                            // here you should add some custom code so you can delete the data
                                            // from this component and from your server as well
                                            data.splice(i, 1);
                                            return true;
                                        }
                                        return false;
                                    });
                                    this.setState({ data: data });
                                }}
                                color="primary"
                                className="edit"
                            >
                                <Person />
                            </Button>{" "}
                            {/* use this button to add a edit kind of action */}
                            <Button
                                justIcon
                                round
                                simple
                                onClick={() => {
                                    let obj = this.state.data.find(o => o.id === key);
                                    alert(
                                        "You've clicked EDIT button on \n{ \nName: " +
                                        obj.name +
                                        ", \nposition: " +
                                        obj.position +
                                        ", \noffice: " +
                                        obj.office +
                                        ", \nage: " +
                                        obj.age +
                                        "\n}."
                                    );
                                }}
                                color="success"
                                className="edit"
                            >
                                <Dvr />
                            </Button>{" "}

                        </div>
                    )
                };
            })
        };
    }
    render() {
        const { classes } = this.props;
        return (
            <GridContainer>
                <GridItem xs={12}>
                    <Card>
                        <CardHeader color="primary" icon>
                            <CardIcon color="primary">
                                <People />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}></h4>
                        </CardHeader>
                        <CardBody>
                            <ReactTable
                                data={this.state.data}
                                filterable
                                columns={[
                                    {
                                        Header: "Name",
                                        accessor: "name"
                                    },
                                    {
                                        Header: "Position",
                                        accessor: "position"
                                    },
                                    {
                                        Header: "Office",
                                        accessor: "office"
                                    },
                                    {
                                        Header: "Age",
                                        accessor: "age"
                                    },
                                    {
                                        Header: "Actions",
                                        accessor: "actions",
                                        sortable: false,
                                        filterable: false
                                    }
                                ]}
                                defaultPageSize={10}
                                showPaginationTop
                                showPaginationBottom={false}
                                className="-striped -highlight"
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(styles)(Clients);
