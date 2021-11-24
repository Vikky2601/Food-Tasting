import "./App.css";
// import SideMenu from "./components/sideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import { useState } from "react";
import Tasting from "./components/tasting";
import Survey from "./components/survey";
// import Administration from "./components/administration";
import Report from "./components/report";
// import Support from "./components/support";
import Sample from "./components/sample";
import NoMatch from "./components/404";
import Header from "./components/header";
import Attribute from "./components/administratipnPage/attribute";
import AttributeSet from "./components/administratipnPage/attribute-set";
import ProductPlatform from "./components/administratipnPage/product-platform";
import TestType from "./components/administratipnPage/test-type";
import Users from "./components/administratipnPage/users";
import AddTasting from "./components/tasting-module/add-tasting";
import Login from "./components/login/login";
import ParticipantId from "./components/surveyPortal/createParticipantID";
import SurveyDetails from "./components/surveyPortal/surveyDetails";
import NewAttribute from "./components/administratipnPage/newAttribute";
import NewPlatform from "./components/administratipnPage/newPlatform";
import NewTestType from "./components/administratipnPage/newTestType";
import NewUser from "./components/administratipnPage/newUser";
import AdminReports from "./components/reportPage/adminReports";
import UserScreening from "./components/reportPage/userScreening";
import GenerateSdcExport from "./components/reportPage/generateSdcExport";
// import DegreedLearningPathway from "./components/supportPage/degreedLearningPathway";
// import GuidelinesStats from "./components/supportPage/guidelinesStats";
// import PopupBlocker from "./components/supportPage/popupBlocker";
// import UserManual from "./components/supportPage/userManual";
import Category from "./components/administratipnPage/category/category";
import ParameterSets from "./components/administratipnPage/parametersets";
import EditSurvey from "./components/tasting-module/editSurvey";
import EditAttribute from "./components/administratipnPage/editAttribute";
import EditAttributeSet from "./components/administratipnPage/editAttributeSet";
import NewSample from "./components/samplePortal/newSample";
import SampleEdit from "./components/samplePortal/sampleEdit";
import EditProductPlateform from "./components/administratipnPage/editProductPlateform";
import EditTestType from "./components/administratipnPage/editTestType";
import EditUser from "./components/administratipnPage/editUser";
import NewCategory from "./components/administratipnPage/category/newCategory";
import EditCategory from "./components/administratipnPage/category/editCategory";
import TastingRegion from "./components/administratipnPage/tastingRegion/tastingRegion";
import NewTastingRegion from "./components/administratipnPage/tastingRegion/newTastingRegion";
import EditTastingRegion from "./components/administratipnPage/tastingRegion/editTastingRegion";
import ProductGroup from "./components/administratipnPage/productGroup/productGroup";
import NewProductGroup from "./components/administratipnPage/productGroup/newProductGroup";
import EditProductGroup from "./components/administratipnPage/productGroup/editProductGroup";
import PanelView from "./components/administratipnPage/panelView/panalView";
import NewPanelView from "./components/administratipnPage/panelView/newPanelView";
import EditPanelView from "./components/administratipnPage/panelView/editPanelView";
import Status from "./components/administratipnPage/status/status";
import NewStatus from "./components/administratipnPage/status/newStatus";
import EditStatus from "./components/administratipnPage/status/editStatus";
import ViewSurvey from "./components/tasting-module/viewSurvey";
import ViewUsers from "./components/administratipnPage/viewUsers";
import ViewTestType from "./components/administratipnPage/viewTestType";
import ViewProductPlateform from "./components/administratipnPage/viewProduct-plateform";
import SurveyTable from "./components/surveyPortal/surveyTable";
import Description from "./components/surveyPortal/description";
import ViewAttribute from "./components/administratipnPage/viewAttribute";
import ViewSample from "./components/samplePortal/viewSample";
import ViewAttributeSet from "./components/administratipnPage/viewAttributeSet";
import AddTastingEvolution from "./components/tasting-module/addTasting-evolution";
import UserScreeningDetails from "./components/reportPage/userScreeningDetails";
import TastingCopy from "./components/tasting-module/tastingCopy";
import Verify from "./components/verify";

// import Login from './components/login/login';

function App() {
  // const [inactive, setInactive] = useState(false);
  const [isSignin] = useState(true);
  const [isReference] = useState(true);
  const [isSample] = useState(true);
  const [isSamp_ref] = useState(true);
  return (
    <div className="App">
      {isSignin ? (
        <>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/tasting">
                  <Tasting />
                </Route>

                <Route path="/tasting/add-tasting">
                  <AddTasting />
                </Route>
                <Route path="/tasting/evolution/:id">
                  <AddTastingEvolution />
                </Route>
                {isReference && (
                  <Route path="/tasting/copy/:id/reference">
                    <TastingCopy reference_type={isReference} />
                  </Route>
                )}
                {isSample && (
                  <Route path="/tasting/copy/:id/sample">
                    <TastingCopy sample_type={isSample} />
                  </Route>
                )}
                {isSamp_ref && (
                  <Route path="/tasting/copy/:id/sampleref">
                    <TastingCopy sampleRef_type={isSamp_ref} />
                  </Route>
                )}

                <Route exact path="/survey">
                  <Survey />
                </Route>
                <Route exact path="/survey/surveys">
                  <SurveyTable />
                </Route>
                <Route exact path="/survey/surveys/description/:id">
                  <Description />
                </Route>

                <Route exact path="/survey/survey-details">
                  <SurveyDetails />
                </Route>

                <Route path="/survey/survey-details/edit/:id">
                  <EditSurvey />
                </Route>
                <Route path="/survey/survey-details/view/:id">
                  <ViewSurvey />
                </Route>
                <Route path="/survey/create-participant-id">
                  <ParticipantId />
                </Route>
                <Route exact path="/administration/attribute">
                  <Attribute />
                </Route>
                <Route exact path="/administration/attribute/edit/:id">
                  <EditAttribute />
                </Route>
                <Route exact path="/administration/attribute/view/:id">
                  <ViewAttribute />
                </Route>

                <Route exact path="/administration/category">
                  <Category />
                </Route>
                <Route exact path="/administration/category/edit/:id">
                  <EditCategory />
                </Route>
                <Route exact path="/administration/category/new-category">
                  <NewCategory />
                </Route>

                <Route exact path="/administration/tasting-region">
                  <TastingRegion />
                </Route>
                <Route exact path="/administration/tasting-region/edit/:id">
                  <EditTastingRegion />
                </Route>
                <Route
                  exact
                  path="/administration/tasting-region/new-tasting-region"
                >
                  <NewTastingRegion />
                </Route>

                <Route exact path="/administration/product-group">
                  <ProductGroup />
                </Route>
                <Route exact path="/administration/product-group/edit/:id">
                  <EditProductGroup />
                </Route>
                <Route
                  exact
                  path="/administration/product-group/new-product-group"
                >
                  <NewProductGroup />
                </Route>

                <Route exact path="/administration/panel-view">
                  <PanelView />
                </Route>
                <Route exact path="/administration/panel-view/edit/:id">
                  <EditPanelView />
                </Route>
                <Route exact path="/administration/panel-view/new-panel-view">
                  <NewPanelView />
                </Route>

                <Route exact path="/administration/status">
                  <Status />
                </Route>
                <Route exact path="/administration/status/edit/:id">
                  <EditStatus />
                </Route>
                <Route exact path="/administration/new-status">
                  <NewStatus />
                </Route>

                <Route exact path="/administration/attribute/new-attribute">
                  <NewAttribute />
                </Route>

                <Route exact path="/administration/attribute-set">
                  <AttributeSet />
                </Route>
                <Route exact path="/administration/attribute-set/edit/:id">
                  <EditAttributeSet />
                </Route>
                <Route exact path="/administration/attribute-set/view/:id">
                  <ViewAttributeSet />
                </Route>
                <Route path="/administration/parameter-sets">
                  <ParameterSets />
                </Route>
                <Route exact path="/administration/product-platform">
                  <ProductPlatform />
                </Route>
                <Route exact path="/administration/product-platform/edit/:id">
                  <EditProductPlateform />
                </Route>
                <Route exact path="/administration/product-platform/view/:id">
                  <ViewProductPlateform />
                </Route>
                <Route
                  exact
                  path="/administration/product-platform/new-platform"
                >
                  <NewPlatform />
                </Route>

                <Route exact path="/administration/test-type">
                  <TestType />
                </Route>
                <Route exact path="/administration/test-type/edit/:id">
                  <EditTestType />
                </Route>
                <Route exact path="/administration/test-type/view/:id">
                  <ViewTestType />
                </Route>
                <Route path="/administration/test-type/new-testtype">
                  <NewTestType />
                </Route>

                <Route exact path="/administration/users">
                  <Users />
                </Route>
                <Route exact path="/administration/users/edit/:id">
                  <EditUser />
                </Route>
                <Route exact path="/administration/users/view/:id">
                  <ViewUsers />
                </Route>
                <Route path="/administration/users/new-user">
                  <NewUser />
                </Route>

                <Route exact path="/report">
                  <Report />
                </Route>
                <Route path="/report/admin-repports">
                  <AdminReports />
                </Route>
                <Route exact path="/report/user-screening">
                  <UserScreening />
                </Route>
                <Route path="/report/user-screening/details">
                  <UserScreeningDetails />
                </Route>
                <Route path="/report/generate-sdc-export">
                  <GenerateSdcExport />
                </Route>

                <Route exact path="/sample">
                  <Sample />
                </Route>
                <Route exact path="/sample/edit/:id">
                  <SampleEdit />
                </Route>
                <Route exact path="/sample/view/:id">
                  <ViewSample />
                </Route>
                <Route exact path="/sample/new-sample">
                  <NewSample />
                </Route>
                <Route path="/api/v1/ms/iam/verify/">
                  <Verify />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      ) : (
        <>
          <Router>
            <Switch>
              <Route path="/api/v1/ms/iam/verify/">
                <Verify />
              </Route>
              <Route exact path="/">
                <Login />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
