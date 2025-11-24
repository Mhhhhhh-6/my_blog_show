---
date : '2025-11-24T18:24:20+08:00'
draft : false
title : "信号与系统笔记"
description: "更新内容：信号的分类、奇异信号、系统的基本性质以及卷积公式推导"
image: "https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241745513.png" # 这里可以填一张封面图链接
categories:
    - "学习笔记"
tags:
    - "信号与系统"
    - "专业课"
---


# 信号与系统（搭配2022胡浩基老师讲解）

## 第一章 信号与系统

### 0 附录：积分表

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241450966.png)

### 1.1信号的描述与信号的分类

#### 1.基于信号维度的分类

一维信号（声音信号）

二维信号（图像信号，RGB编码）

三维信号（视频信号，给图像信号加一个时间轴/深度图（RGBD）![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241451083.png))

在信号与系统中 我们只讨论一维的信号。

#### 2.一维信号的两种形式：连续信号和离散信号

<mark>x(t):连续信号</mark> 因变量随t变化而变化
<mark>x[n]:离散信号</mark> 其中 n为整数（他只是一个名字 为了表达的统一）

 而对于x <mark>是信号的幅度（幅值、强度、大小等）</mark>

#### 3.周期信号与非周期信号

x(t)=x(t+mT),m属于Z，T为最小正周期

x[n]=x[n+mN],m属于Z，N是一个自然数

#### 4.奇信号与偶信号（对应于奇函数与偶函数）

任意一个信号都可以被分为一个奇信号和一个偶信号，且拆法唯一

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241451970.png)

对于离散信号 同理（仅仅只是连续信号取特殊值）

唯一性证明：

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241452534.png)

#### 5.功率信号和能量信号

##### 能量与功率：

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241452626.png)

离散的求和和连续的积分 是一回事

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241452476.png)

##### 能量信号（能量有限信号）：

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241453443.png)

##### 功率信号（功率有限信号）

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241453333.png)

### 1.2奇异信号

#### 1.单位阶跃信号

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241453662.png)

<mark>需要注意的是，u(0)可以等于任意值</mark>，第二章会涉及

#### 2.冲激信号

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241453664.png)

#### 3.抽样函数Sa(t)

前置证明

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241453705.png)

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241454584.png)

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241454708.png)



接下来是对![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241454793.png)的证明

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241454578.png)首先构造I(a) 求导消去t

由欧拉公式：![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241455317.png)将sint代换

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241455636.png)然后 对于目前的式子 是可以积分的

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241455926.png)积分后是这样

即![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241455210.png)

接下来确定C

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241455981.png)因为a为正无穷时 I(a)为0

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241455140.png)得证

### 1.3单位冲激序列和单位阶跃序列

#### 1单位冲激序列

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241456406.png)

他和冲激信号有本质的区别 冲激信号是奇异信号 在0处为正无穷 在其他处为0 且从负无穷积分到正无穷值为1

而单位冲激序列是 在0处为1 其他为0 且求和值亦为1

#### 2.单位阶跃序列

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241456621.png)

和u[t]对应 但是离散 对比图如下

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241456728.png)

### 1.4信号的自变量变换

![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241456040.png)

对于x(3t+6):

1.化成标准形式：![](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241456803.png)

2.前有负号翻转：此题没有负号 所以不翻转

3.系数大于1 压缩 系数小于1 拉伸

![image-20251124145706468](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241457653.png)

4.加号左移 减号右移

![image-20251124145730660](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241457256.png)

对于x(-3t+6)

1.化为标准形式:x(-3(t-2))

2.前有负号翻转：![image-20251124145744778](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241457967.png)

3.系数大于1，压缩；系数小于1，拉伸：![image-20251124145757534](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241457704.png)

4.加号左移，减号右移：![image-20251124145809761](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241458935.png)

那么对于![image-20251124145820189](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241458395.png)

也很简单 只需要做一个变量代换,令u=3-2t 则又是上面的问题

对于单位阶跃信号，构成方波：![image-20251124145835805](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241458036.png)

u(t)是大于0的都为1 u(t-t0)是大于t0的都为1 那么G(t)就是0到t0之间都为1

同理 对于单位阶跃序列：![image-20251124145852586](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241458788.png)

因为在n=N时 也被减为0了 所以是N-1

![image-20251124172134387](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241721590.png)

注意边界值



对于单位冲激序列：![image-20251124172146200](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241721450.png)只不过是每个项对应的单位冲激序列相加而已 也很简单

<mark>卷积公式</mark>![image-20251124172330556](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241723755.png)

### 1.6系统的基本性质

#### <mark>1.线性系统（非线性系统）</mark>

![image-20251124172341308](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241723586.png)

一为齐次性 二为叠加性 其中a为任意实数

##### 齐次性证明

![image-20251124172406822](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241724009.png)

由于对于任意的x(t) 所以有以下证明：



![image-20251124172415390](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241724586.png)

假设一个系统能将x(t)放大三倍

![image-20251124172424241](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241724414.png)

那么ax(t)通过系统后输出什么呢？ 首先将ax(t)视作一整个x(t)通过系统后变成了三倍的ax(t) 即a[3x(t)] 即ay(t) 所以齐次性得证

![image-20251023194749872](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241724374.png)

##### 叠加性证明

![image-20251023194957209](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241724282.png)

目前有这个

现在把x1 x2视作一包x 则：![image-20251023195032086](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241724520.png)

拆开后：

![image-20251023195048130](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241724934.png)

即为![image-20251023195057575](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241725518.png)

满足叠加性 得证

##### <mark>y(t)=tx(t)为线性系统的证明</mark>

![image-20251023195535612](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241725033.png)



##### <mark>微分器系统（y(t)=dx(t)/dt）是线性系统的证明</mark>

![image-20251023200035356](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241725864.png)



##### <mark>积分器是线性系统的证明：</mark>

![image-20251023202340837](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241725222.png)



##### <mark>y(t)=x(t)+1不是线性系统的证明</mark>

![image-20251023221931423](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241726743.png)



##### <mark>y(t)=x(t)<sup>2</sup>不是线性系统的证明</mark>

![image-20251023222414254](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241726730.png)



以上 离散均具有同样的性质

##### <mark>y[n]=x[n]-x[n-1]（离散微分器）是线性系统的证明</mark>

![image-20251023223458001](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241726496.png)

叠加性类似 都是令f[n]为要证的式子

##### <mark>离散积分器是线性系统（自己证）</mark>

![image-20251023224048354](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241726290.png)



##### 线性系统的判据

1.每一项都有x

2.每一项的x都是一次

![image-20251023224343121](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241727965.png)



##### 拓展题

![image-20251023224918462](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241727087.png)

![下载](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241727848.png)

#### <mark>2.时不变系统（时变系统）</mark>

![image-20251104231229755](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241727246.png)

![IMG_0342(20251104-235355)](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241727884.PNG)

![IMG_0343(20251105-000159)](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241727654.PNG)

综上可得出时不变的判据：1.t只在x的括号里 2.t只能是t，不能是2t，-2t，t^2等其他函数

#### 3.因果系统（非因果系统）

定义：输出y(t)在输入x(t)之后发生（如果一个系统任何时刻输出只决定于现在和过去的输入，就称该系统为因果系统）

![image-20251105001014900](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241728014.png)

![image-20251105001332029](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241728112.png)

![image-20251105001509248](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241728834.png)

因果系统的判据：x括号里的数<mark>恒小于</mark>y括号里的数

#### 4.稳定系统（非稳定系统）

x(t)->y(t)

若x(t)有界->y(t)有界

则稳定

①y(t)=e<sup>x(t)</sup> ->稳定 

当x(t)有界时 y(t)有界

②y(t)=x(t)<sup>3</sup>-2x(t)<sup>2</sup>+x(t)+1  ->稳定

③y(t)=$\frac{dx(t)}{dt}$   ->不稳定

若x(t)=u(t) 则y(t)=$\delta(t)$ 无界 

④y(t)=$\int_{-\infty}^{t}{x(t)dt}$  ->不稳定

若x(t)=1 则y(t)=$+\infty$ 无界

⑤y[n]=$\sum_{k=-\infty}^{+\infty}{x[k]}$  ->不稳定



⑥y[n]=x[n]=x[n-1]  ->稳定



#### 5.无记忆系统（记忆系统）

一个系统无记忆，是指y(t)的值仅仅只依赖于x(t)的值

y(t)=x(t)<sup>2</sup>+e<sup>x(t)</sup>   ->   无记忆

y(t)=x(t-1)   ->   记忆

y[n]=x[n]<sup>3</sup>   ->   无记忆

y[n]=x[2n]   ->   记忆

判据：x与y括号里的数完全一样

<mark>无记忆系统一定是因果系统</mark>

#### 6.可逆系统（不可逆系统）

x(t)能唯一写成y(t)的形式   -> 可逆

①y(t)=x(t-1) x(t)=y(t+1)   ->可逆

②y(t)=x(t)<sup>2</sup>  $x(t)=\pm\sqrt(y(t))$ ->不可逆

③y(t)=x(2t) x(t)=y(0.5t)   ->可逆

④y[n]=$\sum_{k=-\infty}^{n}{x[k]}$ x[n]=y[n]-y[n-1]  ->可逆

⑤y(t)=$\int_{-\infty}^{t}{x(t)dt}$ x(t)=$\frac{dy(t)}{dt}$   ->可逆

⑥y(t)=$\frac{dx(t)}{dt}$ x(t)=$\int_{-\infty}^{t}{y(t)dt+C}$   ->不可逆

## 第二章 连续系统的时域分析

### 2.1LTI系统时域分析

线性时不变系统（Linear Time-Invariant System）

如果一个系统既线性又时不变，我们就叫它线性时不变系统(LTI系统)

![image-20251117175819327](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241728424.png)

<mark>线性只是对现实问题的近似</mark>

LTI很简单 如果我们知道LTI的一个x(t)对应的y(t)那么我们就知道所有的x(t)对应的y(t)

### 2.2离散LTI系统卷积公式推导

$\delta[n]$ -> h[n] (经过LTI系统)

$\delta[n]$ 是单位脉冲序列 h[n]是单位脉冲响应(LTI系统唯一的标识)

而若x[n] -> y[n] (任意x[n]经过上述的LTI系统)

y[n]=x[n]*h[n] 

*为卷积(Convolution)

那么这个要怎么算才能比较快呢

一 列表法

①确定y[n]=x[n]*h[n]取值范围(y[n]最左边(最右边)=x[n]最左边(最右边)+h[n]最左边(最右边))

②![image-20251117235153216](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241728069.png)



二 卷积计算公式

<mark>y[n]=$\sum_{k=-\infty}^{\infty}{x[k]h[n-k]}$</mark> 离散系统的卷积和 即<mark>y[n]=x[n]*h[n]</mark>

要证上式 先证明x[n]= $\sum_{k=-\infty}^{\infty}{x[k]\delta[n-k]}$

![image-20251119220306997](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241729578.png)

得证

然后

$\delta[n]->h[n]$ h[n]是$\delta[n]$的响应

$\delta[n-k]->h[n-k]$ 时不变系统

$x[k]\delta[n-k]->x[k]h[n-k]$ 线性系统齐次性

$\sum_{k=-\infty}^{\infty}{x[k]\delta[n-k]}->\sum_{k=-\infty}^{\infty}{x[k]h[n-k]}$ 线性系统叠加性

而$\sum_{k=-\infty}^{\infty}{x[k]\delta[n-k]}=x[n]$ 

所以$x[n]->\sum_{k=-\infty}^{\infty}{x[k]h[n-k]}$

得证

过程：翻转 平移 相乘 求和

### 2.3连续LTI系统卷积公式

$x(t)=\int_{-\infty}^{+\infty}{x(\tau)\delta(t-\tau)d\tau}$

->(通过LTI)

$y(t)=\int_{-\infty}^{+\infty}{x(\tau)h(t-\tau)d\tau}$

即$x(t)*h(t)=\int_{-\infty}^{+\infty}{x(\tau)h(t-\tau)d\tau}$

### 2.4冲激函数的性质

#### 1.$\int_{-\infty}^{+\infty}{\delta(t)dt=1}$

#### 2.$\int_{-\infty}^{+\infty}{x(t)\delta(t)dt=x(0)}$

#### 3.$\int_{-\infty}^{+\infty}{x(t)\delta(t-t_0)=x(t_0)}$

#### 4.$x(t)\delta(t)=x(0)\delta(t)$

#### 5.$\delta(at)=\frac{1}{|a|}\delta(t)$

#### 6.$\delta(at+b)=\frac{1}{|a|}\delta(t+\frac{b}{a})$

#### 7.$\delta(f(t))=\sum_{所有f(t_0)=0}{\frac{1}{|f'(t0)|}\delta(t-t_0)}$

#### 8. $\lim_{\omega \to +\infty} \frac{\sin(\omega t)}{\pi t} = \delta(t)$

#### 9. $\lim_{\tau \to +\infty} \frac{\tau}{\pi(t^2+\tau^2)} = \delta(t)$

### 2.5连续信号卷积的计算

和离散的一样

1.公式法 

2.翻转 平移 相乘 求和

### 2.6卷积性质

①交换律：$x(t)*h(t)=h(t)*x(t)$

②结合律：$[x(t)*h_1(t)]*h_2(t)=[x(t)*h_2(t)]*h_1(t)$

③分配律：$x(t)*[h_1(t)+h_2(t)]=x(t)*h_1(t)+x(t)*h_2(t)$

注意 积分和求和具有分配律

### 2.7补充知识

①同宽的矩阵方波卷积得三角波

![image-20251120225441953](https://cdn.jsdelivr.net/gh/Mhhhhhh-6/my_blog_img@main/202511241729150.png)

②$x(t)*u(t)=\int_{-\infty}^{t}{x(\tau)d\tau}$ 积分器

$x[n]*u[n]=\sum_{k=-\infty}^{n}{x[k]}$ 累加器

③冲激偶函数$\delta'(t)=\frac{d\delta(t)}{dt}$

$\int_{-\infty}^{+\infty}{x(t)\delta'(t)dt}=-x'(0)$

④$\frac{d[x(t)*h(t)]}{dt}=\frac{dx(t)}{dt}*h(t)=\frac{dh(t)}{dt}*x(t)$

⑤$x(t+t_0)*h(t-t_0)=x(t)*h(t)$

⑥定理：LTI系统稳定的充要条件是：$\int_{-\infty}^{+\infty}{|h(t)|dt}<+\infty 或 \sum_{k=-\infty}^{+\infty}{|h[n]|}<+\infty$

### 2.8LTI系统因果的充要条件

$h(t)=0 当t<0时$

$或h[n]=0当n<0时$

勒贝格定义下 离散点不考虑

## 第三章 连续信号与系统的频域分析（傅里叶变换）

### 3.1傅里叶级数

一开始的傅里叶级数是用来研究热传导的 

热传导方程：

求f(x,t) 当t>0时

$\frac{\partial f}{\partial t}=K\frac{\partial^2f}{\partial x^2}$

$f(x,0)=f(x)$

这个难点在于f(x)的形式不定

我们能找到特例 来满足热传导方程：

①当$f(x)=B$时，$f(x,t)=B$

②当$f(x)=Bcos(\omega x)$时，$f(x,t)=Bcos(\omega x)e^{-K\omega^2t}$

③当$f(x)=Csin(\omega x)$时，$f(x,t)=Csin(\omega x)e^{-K\omega^2t}$



傅里叶发布了论热传导方程的解法

①如果$f(x)=B_0+\sum_{k=1}^{+\infty}{B_kcos(k\omega_0x)}+\sum_{k=1}^{+\infty}{C_ksin(k\omega_0x)}$

则热传导方程的解是

$f(x,t)=B_0+\sum_{k=1}^{+\infty}{B_kcos(k\omega_0x)e^{-Kk^2\omega_0^2t}}+\sum_{k=1}^{+\infty}{C_ksin(k\omega_0x)e^{-Kk^2\omega_0^2t}}$

注意 所有sin和cos的频率 都是$\omega_0$的整数倍

我们叫$\omega_0$为基波频率 $k\omega_0$为k次谐波频率 $B_0$为直流分量 $T_0=\frac{2\pi}{\omega_0}$为基波周期



那么 如何根据f(x)算出$B_0$ 所有的$B_k$和$C_k$呢

(1)算$B_0$

首先 ①$\int_{0}^{T_0}{cos(k\omega_0x)dx}=0$ ②$\int_{0}^{T_0}{cos(k\omega_0x)dx}=0$

那么我们对$f(x)=B_0+\sum_{k=1}^{+\infty}{B_kcos(k\omega_0x)}+\sum_{k=1}^{+\infty}{C_ksin(k\omega_0x)}$

两边从0到$T_0$积分 得到$\int_{0}^{T_0}{f(x)dx}=B_0T_0$

所以$B_0=\frac{1}{T_0}\int_{0}^{T_0}{f(x)dx}$

(2)算$B_k$

首先①$\int_{0}^{T_0}{cos(k_1\omega_0x)cos(k_2\omega_0x)dx}=0 (k_1\neq k_2)$

还有②$\int_{0}^{T_0}{cos(k_1\omega_0x)sin(k_2\omega_0x)dx}=0 (k_1\neq k_2)$

并且③$\int_{0}^{T_0}{sin(k_1\omega_0x)sin(k_2\omega_0x)dx}=0 (k_1\neq k_2)$

另外④$\int_{0}^{T_0}{cos^2(k\omega_0x)}=\frac{T_0}{2}$ $\int_{0}^{T_0}{sin^2(k\omega_0x)}=\frac{T_0}{2}$

总结一下(1)和(2)的前置公式

从 $1, \cos(\omega_0 x), \cos(2\omega_0 x), \cos(3\omega_0 x) \cdots$

$\sin(\omega_0 x), \sin(2\omega_0 x), \sin(3\omega_0 x) \cdots$

任取两个，相乘同时在 $[0, T_0]$ 积分，结果都为 $0$

任选一个非1的，乘他自己同时在 $[0, T_0]$ 积分，结果都为$\frac{T_0}{2}$



有了以上结论 我们就能得出

$$\int_{0}^{T_0} f(x) \cos(k\omega_0 x) dx = \int_{0}^{T_0} B_0 \cos(k\omega_0 x) dx + \sum_{u=1}^{+\infty} \int_{0}^{T_0} B_u \cos(u\omega_0 x) \cos(k\omega_0 x) dx + \sum_{u=1}^{+\infty} \int_{0}^{T_0} C_u \sin(u\omega_0 x) \cos(k\omega_0 x) dx$$

只有当u=k时 右边能留下来一项 其他全为0 最终得到

$$B_k = \frac{2}{T_0} \int_{0}^{T_0} f(x) \cos(k\omega_0 x) dx$$



(3)算$C_k$

$$\int_{0}^{T_0} f(x) \sin(k\omega_0 x) dx = \int_{0}^{T_0} B_0 \sin(k\omega_0 x) dx + \sum_{u=1}^{+\infty} \int_{0}^{T_0} B_u \cos(u\omega_0 x) \sin(k\omega_0 x) dx + \sum_{u=1}^{+\infty} \int_{0}^{T_0} C_u \sin(u\omega_0 x) \sin(k\omega_0 x) dx$$

可得

$$C_k = \frac{2}{T_0} \int_{0}^{T_0} f(x) \sin(k\omega_0 x) dx$$



总结：若$f(x)=B_0+\sum_{k=1}^{+\infty}{B_kcos(k\omega_0x)}+\sum_{k=1}^{+\infty}{C_ksin(k\omega_0x)}$

则$B_0=\frac{1}{T_0}\int_{0}^{T_0}{f(x)dx}$

$$B_k = \frac{2}{T_0} \int_{0}^{T_0} f(x) \cos(k\omega_0 x) dx$$

$$C_k = \frac{2}{T_0} \int_{0}^{T_0} f(x) \sin(k\omega_0 x) dx$$

以此解热传导方程可得

$f(x,t)=B_0+\sum_{k=1}^{+\infty}{B_kcos(k\omega_0x)e^{-Kk^2\omega_0^2t}}+\sum_{k=1}^{+\infty}{C_ksin(k\omega_0x)e^{-Kk^2\omega_0^2t}}$

另外 傅里叶级数还可以用复数表达



### 3.2傅里叶级数收敛性证明(狄利赫里三条件)

傅里叶凭什么认为f(x)是这样的 级数发散怎么办

那么就有了收敛性证明

若 $f(x)$ 满足以下条件： 

① 一个周期绝对可积$\int_{0}^{T_0} |f(x)| dx < +\infty$ 

② 一个周期内$f(x)$极值有限 

③ 一个周期内间断点有限

则 $f(x)$ 表示为这个公式，同时 $B_0, B_k, C_k$ 这样算是收敛的。

吉布斯现象：方波无法完全变直 在跳变出会有一个尖峰



