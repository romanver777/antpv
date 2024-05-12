import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadPartner, resetPartner } from "../../store/partner/partner";
import { resetPartners } from "../../store/partners/partners";
import { signOut } from "../../store/auth/auth";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import Header from "../../components/header/header";
import NavTool from "../../components/nav-tool/nav-tool";
import PartnerTitle from "../../components/partner-title/partner-title";
import AuthTool from "../../components/auth-tool/auth-tool";
import Content from "../../components/content/content";
import PartnerContent from "../../components/partner-content/partner-content";
import Message from "../../components/message/message";

function PartnerPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();
  const partner = useAppSelector((state) => state.partner.data);
  const isLoading = useAppSelector((state) => state.partner.loading);

  useEffect(() => {
    if (id) {
      dispatch(resetPartner());
      dispatch(loadPartner(id));
    }
  }, [id, dispatch]);

  const onLogOut = () => {
    dispatch(signOut());
    dispatch(resetPartners());
    dispatch(resetPartner());
  };

  const onBack = () => {
    if (location.state?.back) {
      navigate(location.state.back);
    } else {
      navigate("/");
    }
  };

  return (
    <PageLayout type="modal">
      {isLoading ? (
        <Message text="Загружаем.." />
      ) : (
        <>
          <Header>
            <NavTool onBackClick={onBack} />
            <PartnerTitle item={partner} />
            <AuthTool onLogOut={onLogOut} />
          </Header>
          <Content>
            <PartnerContent item={partner} />
          </Content>
        </>
      )}
    </PageLayout>
  );
}

export default PartnerPage;
