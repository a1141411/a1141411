- antd 阿里的UI框架 ant 蚂蚁金服
    1. Spin 方便的去做loading...效果
        spinning = loading 状态， tips 文字提示
        加载的内容包在它里面
    
    2. Tabs+TabPane key + activeKey + onChange
        Tabs 容器式组件
        TabPane 子组件
        const { Tabs } = antd
        const { TabPane } = Tabs

    3. List + Liat.Item
        dataSource 配置
        renderItem 每一个JSX， key？
            classnames 
    
    4. Icon type
    5. Input
        数据绑定 onChange
        onPressEnter
    6. 数据流转一定要和状态一致 useState 组件挂载 + update