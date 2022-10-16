--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.4

-- Started on 2022-10-15 14:10:43

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: comment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comment (
    comment_id bigint NOT NULL,
    author character varying(50) NOT NULL,
    date character varying(10) NOT NULL,
    text text NOT NULL
);


ALTER TABLE public.comment OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16400)
-- Name: comment_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comment_comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_comment_id_seq OWNER TO postgres;

--
-- TOC entry 3356 (class 0 OID 0)
-- Dependencies: 210
-- Name: comment_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comment_comment_id_seq OWNED BY public.comment.comment_id;


--
-- TOC entry 221 (class 1259 OID 16567)
-- Name: message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.message (
    id bigint NOT NULL,
    email character varying(20) NOT NULL,
    text text NOT NULL
);


ALTER TABLE public.message OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16566)
-- Name: message_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.message_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.message_id_seq OWNER TO postgres;

--
-- TOC entry 3357 (class 0 OID 0)
-- Dependencies: 220
-- Name: message_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.message_id_seq OWNED BY public.message.id;


--
-- TOC entry 211 (class 1259 OID 16401)
-- Name: post_blog; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post_blog (
    post_id bigint NOT NULL,
    summary character varying(100) NOT NULL,
    category character varying(100) NOT NULL,
    date character varying(10) NOT NULL,
    text text NOT NULL,
    src_img character varying(350) NOT NULL
);


ALTER TABLE public.post_blog OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16406)
-- Name: post_blog_comment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post_blog_comment (
    post_id bigint NOT NULL,
    comment_id bigint NOT NULL
);


ALTER TABLE public.post_blog_comment OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16409)
-- Name: post_blog_comment_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_blog_comment_comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_blog_comment_comment_id_seq OWNER TO postgres;

--
-- TOC entry 3358 (class 0 OID 0)
-- Dependencies: 213
-- Name: post_blog_comment_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_blog_comment_comment_id_seq OWNED BY public.post_blog_comment.comment_id;


--
-- TOC entry 214 (class 1259 OID 16410)
-- Name: post_blog_post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_blog_post_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_blog_post_id_seq OWNER TO postgres;

--
-- TOC entry 3359 (class 0 OID 0)
-- Dependencies: 214
-- Name: post_blog_post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_blog_post_id_seq OWNED BY public.post_blog.post_id;


--
-- TOC entry 216 (class 1259 OID 16523)
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    id bigint NOT NULL,
    role character varying(10) NOT NULL
);


ALTER TABLE public.role OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16522)
-- Name: role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_id_seq OWNER TO postgres;

--
-- TOC entry 3360 (class 0 OID 0)
-- Dependencies: 215
-- Name: role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;


--
-- TOC entry 219 (class 1259 OID 16554)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id bigint NOT NULL,
    email character varying(50) NOT NULL,
    name character varying(50) NOT NULL,
    role bigint NOT NULL,
    passwd character varying(80),
    date_registration timestamp without time zone NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16552)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3361 (class 0 OID 0)
-- Dependencies: 217
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 218 (class 1259 OID 16553)
-- Name: user_role_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_role_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_role_seq OWNER TO postgres;

--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 218
-- Name: user_role_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_role_seq OWNED BY public."user".role;


--
-- TOC entry 3190 (class 2604 OID 16411)
-- Name: comment comment_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment ALTER COLUMN comment_id SET DEFAULT nextval('public.comment_comment_id_seq'::regclass);


--
-- TOC entry 3196 (class 2604 OID 16570)
-- Name: message id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message ALTER COLUMN id SET DEFAULT nextval('public.message_id_seq'::regclass);


--
-- TOC entry 3191 (class 2604 OID 16412)
-- Name: post_blog post_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_blog ALTER COLUMN post_id SET DEFAULT nextval('public.post_blog_post_id_seq'::regclass);


--
-- TOC entry 3192 (class 2604 OID 16413)
-- Name: post_blog_comment comment_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_blog_comment ALTER COLUMN comment_id SET DEFAULT nextval('public.post_blog_comment_comment_id_seq'::regclass);


--
-- TOC entry 3193 (class 2604 OID 16526)
-- Name: role id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);


--
-- TOC entry 3194 (class 2604 OID 16557)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3195 (class 2604 OID 16558)
-- Name: user role; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN role SET DEFAULT nextval('public.user_role_seq'::regclass);


--
-- TOC entry 3198 (class 2606 OID 16415)
-- Name: comment comment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (comment_id);


--
-- TOC entry 3208 (class 2606 OID 16574)
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- TOC entry 3204 (class 2606 OID 16528)
-- Name: role pk_id_role; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT pk_id_role PRIMARY KEY (id);


--
-- TOC entry 3206 (class 2606 OID 16560)
-- Name: user pk_id_user; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT pk_id_user PRIMARY KEY (id);


--
-- TOC entry 3202 (class 2606 OID 16417)
-- Name: post_blog_comment post_blog_comment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_blog_comment
    ADD CONSTRAINT post_blog_comment_pkey PRIMARY KEY (comment_id);


--
-- TOC entry 3200 (class 2606 OID 16419)
-- Name: post_blog post_blog_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_blog
    ADD CONSTRAINT post_blog_pkey PRIMARY KEY (post_id);


--
-- TOC entry 3209 (class 2606 OID 16420)
-- Name: post_blog_comment fk_comment; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_blog_comment
    ADD CONSTRAINT fk_comment FOREIGN KEY (comment_id) REFERENCES public.comment(comment_id);


--
-- TOC entry 3210 (class 2606 OID 16425)
-- Name: post_blog_comment fk_post_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_blog_comment
    ADD CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES public.post_blog(post_id);


--
-- TOC entry 3211 (class 2606 OID 16561)
-- Name: user fk_role_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_role_user FOREIGN KEY (role) REFERENCES public.role(id);


-- Completed on 2022-10-15 14:10:43

--
-- PostgreSQL database dump complete
--

-- role
COPY public.role (id, role) FROM stdin;
1	ADMIN
2	USER
\.
-- adding admin

INSERT INTO public.user (email, name, role, passwd, date_registration)
VALUES
('admin@admin.com','admin','1','$2b$10$DKLyKR3bJ0cKNhjqL5zNteAHjSOVWHwu0iOfSRtkAeJ4TdrYwnF8S','2022-10-16T16:33:29.094Z')

