import { useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setPage,
  loadPartners,
  resetPartners,
} from "../../store/partners/partners";
import { resetPartner } from "../../store/partner/partner";
import { signOut } from "../../store/auth/auth";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import Header from "../../components/header/header";
import PartnersTitle from "../../components/partners-title/partners-title";
import AuthTool from "../../components/auth-tool/auth-tool";
import Content from "../../components/content/content";
import List from "../../components/list/list";
import PartnerCard from "../../components/partner-card/partner-card";
import LoadMore from "../../components/load-more/load-more";
import Spinner from "../../components/spinner/spinner";
import Message from "../../components/message/message";

export type TPartner = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

function PartnersPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const partners = useAppSelector((state) => state.partners.data);
  const page = useAppSelector((state) => state.partners.page);
  const total = useAppSelector((state) => state.partners.total_pages);
  const isLoading = useAppSelector((state) => state.partners.loading);

  useEffect(() => {
    document.body.style.overflow = id ? "hidden" : "unset";
  }, [id]);

  useEffect(() => {
    dispatch(loadPartners(page));
  }, [page, dispatch]);

  const onSetPage = () => dispatch(setPage(page + 1));

  const onLogOut = () => {
    dispatch(signOut());
    dispatch(resetPartners());
    dispatch(resetPartner());
  };

  const renders = {
    userCard: (item: TPartner) => <PartnerCard key={item.id} item={item} />,
  };

  return (
    <>
      <PageLayout>
        <Header>
          <PartnersTitle />
          <AuthTool onLogOut={onLogOut} />
        </Header>
        <Content>
          <Spinner loading={isLoading}>
            <List items={partners} renderItem={renders.userCard} />
          </Spinner>
          {isLoading ? (
            <Message text="Загружаем.." />
          ) : (
            <LoadMore onLoadItems={onSetPage} isShow={page < total} />
          )}
        </Content>
      </PageLayout>
      <Outlet />
    </>
  );
}

export default PartnersPage;
