import logo from './logo.svg';
import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header'
import {Grid} from "@mui/material"

import styles from "./Background.module.css";
import background1 from "./main_images/tokyo.jpg"
import background2 from "./main_images/tokyo_sakura.jpg"
import tshirt from "./main_images/tshirt.png"

//Three features
import feature1 from "./main_images/スクリーンショット 2022-10-28 17.58.05.png"
import feature2 from "./main_images/undraw_Landscape_photographer_re_18se (1).png"
import feature3 from "./main_images/undraw_Followers_re_6k3g.png"
import feature4 from "./main_images/スクリーンショット 2022-10-28 19.16.41.png"


//import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import {Stack, Button, Box, Typography, CardContent, Card} from "@mui/material";
import ContactForm from './ContactForm';

//If running into gh-pages only showing readMe page use: https://www.pluralsight.com/guides/fix-create-react-app-showing-readme.md

function App() {
  useEffect(() => {
    document.title = "T-Flyer inc."
  }, [])
  return (
    <div className='App' style={{backgroundColor: "#f4f4f6"}}>
      <Header/>
      <article className={styles.article} style={{ backgroundImage: `url(${background1})`,aspectRatio: 3/2}}>
        <h1 className={styles.header} style={{margin: 50}}>
          Tシャツで稼いでみませんか？
        </h1>
      </article>
      <text style={{margin: 50}}>
        <h1 style={{color: 'purple', fontSize: "60px"}}>
          SERVICES
        </h1>
      </text>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'back',
          height: '3px',
          alignContent: "center",
          margin: 50
        }}
      />
      <text　style={{fontSize: "60px", margin: 50}}>
        Tシャツ広告
      </text>
      <article className={styles.article} style={{ backgroundImage: `url(${background2})`, aspectRatio: 3/2}}>
        <h1 className={styles.header} style={{margin: 20}}>
        Tシャツで広告する新しい選択肢
        </h1>
      </article>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 50}}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" href="/client">
            広告主 
          </Button>
          <Button variant="contained" href="/influencer">
            インフルエンサー
          </Button>
        </Stack>
      </div>
      <h3>
        コンテンツに溶け込み、安定した視認性を担保​
      </h3>
      <h3>
        統計情報を掛け合わせ、消費者にメッセージを届けます
      </h3>
      <h2>
        T-シャツ広告の三つの強み
      </h2>
      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        align="center"
      >
        <Grid item xs={12} md={3}>
          <Card style={{width:350, height:500,  backgroundColor: "white", borderRadius:30}}>
              <CardContent>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
                  <img style={{width: 200, height: 150}} src={feature1} alt="feature1"/>
                </div>
                <Typography variant='h5' component="h2" >
                  特徴１
                </Typography>
                <br></br>
                <Typography variant='h7' component="h2" >
                  画面中央のポジショニングと長時間表示で抜群の視認性
                </Typography>
                <br></br>
                <Typography variant='h10' component="h6">
                  必ず視聴者の目に入る位置に広告が配置される為、全てのインプレッション（広告表示）が視認とイコールに。

                </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{width:350, height:500,  backgroundColor: "white", borderRadius:30}}>
            <CardContent>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
                <img style={{width: 200, height: 150}} src={feature2} alt="feature2"/>
              </div>
              <Typography variant='h5' component="h2" >
                特徴２              
              </Typography>
              <br></br>
              <Typography variant='h7' component="h2" >
                動画内での広告に対する視線の集中を確保
              </Typography>
              <br></br>
              <Typography variant='h10' component="h6">
                “人間”と“文字”という動画内でも最も注目される２要素を、Tシャツによってかけ合わせ、視聴者の広告への視線の集中を確保。
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card style={{width:350, height:500,  backgroundColor: "white", borderRadius:30}}>
            <CardContent>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
                <img style={{width: 200, height: 150}} src={feature3} alt="feature3"/>
              </div>
              <Typography variant='h5' component="h2" >
                特徴３            
              </Typography>
              <br></br>
              <Typography variant='h7' component="h2" >
                SNS統計などから商品・サービスに合わせたターゲット設定が可能
              </Typography>
              <br></br>
              <Typography variant='h10' component="h6">
                クライアント様の商品・サービスにあった消費者のターゲティングをご提案。SNSのアナリティクスを利用し、性別、年齢、趣向、時間帯、プラットフォーム別のターゲティングが可能です。
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    
      <div style={{margin: 50}}>
        <Grid
          container
          spacing={5}
          direction="row"
          justifyContent="center"
          align="center"
        >
          <div style={{margin: 50}}>
          <h2>
            Tシャツを着るという新しい選択肢
          </h2>
          </div>  
          <Grid item xs={12}>
            <Card style={{width:800, height:500,  backgroundColor: "white", borderRadius:30}}>
              <CardContent>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
                  <img style={{width: 400, height: 200}} src={feature4} alt="feature4"/>
                </div>
                <Typography variant='h5' component="h2" >
                  一定時間、提供したTシャツを着るのみ
                </Typography>
                <br></br>
                <Typography variant='h10' component="h6">
                  案件同のようにインフルエンサー様が商品の情報を読んだり、使ったりする必要がありません。動画のコンテンツを変えずに、Tシャツを着るだけで報酬を受け取ることが可能です。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
        
      <div>
        <h1>
          OUR GOAL
        </h1>
        <h2>
          変わった広告を通した新しい日本の姿を作る
        </h2>
        <h2>
          アンビエント広告会社として、トレンドを作り出す
        </h2>
        <h2>
          常にユーモアのある見方をする
        </h2>
      </div>

      
      <div className='App'>
        <ContactForm />
      </div>
      <div style={{margin: 50}}>
        <Typography variant='h5' component="h2" >
          連絡
        </Typography>
        <br></br>
        <Typography variant='h5' component="h2" >
          会社名　合同会社T-flyter
        </Typography>
        <Typography variant='h5' component="h2" >
          住所　〒150-0002
          東京都渋谷区2-9-15 宮益坂ビルディング609
        </Typography>
        <Typography variant='h5' component="h2" >
          電話番号　080-1395-8037
        </Typography>
        <Typography variant='h5' component="h2" >
          代表社員　
          佐々木仁之将
          欠遼太郎
          村松亨洋
        </Typography>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
