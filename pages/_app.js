import './styles/all.css';
import Head from 'next/head';
import Link from 'next/link';
import { Component } from 'react';

export default function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}